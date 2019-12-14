import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { ScheduleItem, ScheduleService } from '../../../shared/services/schedule/schedule.service';
import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
	selector: 'schedule',
	templateUrl: './schedule.component.html',
	styleUrls: [ './schedule.component.scss' ]
})
export class ScheduleComponent implements OnInit, OnDestroy {
	open = false;
	subscriptions: Subscription[] = [];
	date$: Observable<Date>;
	schedule$: Observable<ScheduleItem[]>;
	selected$: Observable<any>;
	list$: Observable<Meal[] | Workout[]>;
	constructor(
		private scheduleService: ScheduleService,
		private mealsService: MealsService,
		private workoutsService: WorkoutsService,
		private store: Store
	) {}

	ngOnInit() {
		this.date$ = this.store.select('date');
		this.schedule$ = this.store.select('schedule');
		this.selected$ = this.store.select('selected');
		this.list$ = this.store.select('list');

		this.subscriptions = [
			this.scheduleService.schedule$.subscribe(),
			this.scheduleService.selected$.subscribe(),
			this.scheduleService.list$.subscribe(),
			this.scheduleService.items$.subscribe(),
			this.mealsService.meals$.subscribe(),
			this.workoutsService.workouts$.subscribe()
		];
	}
	ngOnDestroy() {
		this.subscriptions.forEach((subscription) => subscription.unsubscribe());
	}

	closeAssign() {
		this.open = false;
	}

	assignItem(data: string[]) {
		this.scheduleService.updateItems(data);
		this.closeAssign();
	}

	changeDate(date: Date) {
		this.scheduleService.updateDate(date);
	}
	changeSection(data: any) {
		this.open = true;
		this.scheduleService.selectSection(data);
	}
}
