import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Workout {
	name: string;
	type: string;
	strength: any;
	endurange: any;
	timestamp: number;
	$key: string;
	$exists: () => boolean;
}

@Injectable({
	providedIn: 'root'
})
export class WorkoutsService {
	workouts$: Observable<Workout[]> = this.db.list<Workout>(`workouts/${this.uid}`).snapshotChanges().pipe(
		map((actions) => {
			return actions.map((a) => ({ $key: a.key, ...a.payload.val() }));
		}),
		tap((next) => {
			return this.store.set('workouts', next);
		})
	);

	get uid() {
		return this.authServive.user.uid;
	}

	constructor(private store: Store, private db: AngularFireDatabase, private authServive: AuthService) {}

	addWorkout(workout: Workout) {
		return this.db.list(`workouts/${this.uid}`).push(workout);
	}

	removeWorkout(key: string) {
		return this.db.list(`workouts/${this.uid}`).remove(key);
	}

	updateWorkout(key: string, workout: Workout) {
		return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
	}

	getWorkout(key: string) {
		if (!key) {
			return of({} as Workout);
		}
		return this.store
			.select<Workout[]>('workouts')
			.pipe(filter(Boolean), map((workouts: Workout[]) => workouts.find((workout) => workout.$key === key)));
	}
}
