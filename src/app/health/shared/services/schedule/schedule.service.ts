import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Store } from 'store';

import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Meal } from '../meals/meals.service';
import { Workout } from '../workouts/workouts.service';

export interface ScheduleItem {
	meals: Meal[];
	workouts: Workout[];
	section: string;
	timestamp: number;
	$key?: string;
}
export interface ScheduleList {
	morning?: ScheduleItem;
	lunch?: ScheduleItem;
	evening?: ScheduleItem;
	snacks?: ScheduleItem;
	[key: string]: any;
}
@Injectable({
	providedIn: 'root'
})
export class ScheduleService {
	private date$ = new BehaviorSubject(new Date());
	private section$ = new Subject();

	selected$ = this.section$.pipe(tap((next) => this.store.set('selected', next)));

	list$ = this.section$.pipe(
		map((value: any) => this.store.value[value.type]),
		tap((next) => this.store.set('list', next))
	);

	schedule$: Observable<ScheduleItem[]> = this.date$.pipe(
		tap((next: any) => this.store.set('date', next)),
		map((day: any) => {
			const startAt = new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime();
			const endAt = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1).getTime() - 1;
			return { startAt, endAt };
		}),
		switchMap(({ startAt, endAt }: any) => this.getSchedule(startAt, endAt)),
		map((data: any) => {
			const mapped: ScheduleList = {};

			for (const prop of data) {
				if (!mapped[prop.section]) {
					mapped[prop.section] = prop;
				}
			}

			return mapped;
		}),
		tap((next: any) => this.store.set('schedule', next))
	);

	get uid() {
		return this.authService.user.uid;
	}

	constructor(private store: Store, private db: AngularFireDatabase, private authService: AuthService) {}

	updateDate(date: Date) {
		this.date$.next(date);
	}

	selectSection(data: any) {
		this.section$.next(data);
	}

	private getSchedule(startAt: number, endAt: number) {
		return this.db
			.list(`schedule/${this.uid}`, (ref) => ref.orderByChild('timestamp').startAt(startAt).endAt(endAt))
			.valueChanges();
	}
}
