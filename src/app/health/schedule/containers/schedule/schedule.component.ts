import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

import { ScheduleItem, ScheduleService } from '../../../shared/services/schedule/schedule.service';

@Component({
	selector: 'schedule',
	templateUrl: './schedule.component.html',
	styleUrls: [ './schedule.component.scss' ]
})
export class ScheduleComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	date$: Observable<Date>;
	schedule$: Observable<ScheduleItem[]>;
	constructor(private scheduleService: ScheduleService, private store: Store) {}

	ngOnInit() {
		this.date$ = this.store.select('date');
		this.schedule$ = this.store.select('schedule');
		this.subscriptions = [ this.scheduleService.schedule$.subscribe() ];
	}
	ngOnDestroy() {
		this.subscriptions.forEach((subscription) => subscription.unsubscribe());
	}

	changeDate(date: Date) {
		this.scheduleService.updateDate(date);
	}
	changeSection(data: any) {
		this.scheduleService.selectSection(data);
	}
}
