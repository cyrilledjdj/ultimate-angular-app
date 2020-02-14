import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

import { User } from './auth/shared/services/auth/auth.service';
import { Meal } from './health/shared/services/meals/meals.service';
import { Workout } from './health/shared/services/workouts/workouts.service';
import { ScheduleItem } from './health/shared/services/schedule/schedule.service';
import { Injectable } from "@angular/core";

export interface State {
	user: User;
	meals: Meal[];
	schedule: ScheduleItem[];
	selected: any;
	date: Date;
	list: any;
	workouts: Workout[];
	[key: string]: any;
}

const state: State = {
	user: undefined,
	meals: undefined,
	schedule: undefined,
	selected: undefined,
	date: undefined,
	list: undefined,
	workouts: undefined
};

@Injectable()
export class Store {
	private subject = new BehaviorSubject<State>(state);
	private store = this.subject.asObservable().pipe(distinctUntilChanged());

	get value() {
		return this.subject.value;
	}

	select<T>(name: string): Observable<T> {
		return this.store.pipe(pluck(name));
	}

	set(name: string, newState: any) {
		this.subject.next({ ...this.value, [name]: newState });
	}
}
