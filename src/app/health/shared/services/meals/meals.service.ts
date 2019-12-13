import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Meal {
	name: string;
	ingredients: string[];
	timestamp: number;
	$key: string;
	$exists: () => boolean;
}

@Injectable({
	providedIn: 'root'
})
export class MealsService {
	meals$: Observable<Meal[]> = this.db
		.list<Meal>(`meals/${this.uid}`)
		.valueChanges()
		.pipe(tap((next) => this.store.set('meals', next)));

	get uid() {
		return this.authServive.user.uid;
	}

	constructor(private store: Store, private db: AngularFireDatabase, private authServive: AuthService) {}
}
