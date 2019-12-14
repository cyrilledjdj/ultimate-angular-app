import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ScheduleService } from '../../../shared/services/schedule/schedule.service';
import { Store } from 'store';

@Component({
	selector: 'schedule',
	templateUrl: './schedule.component.html',
	styleUrls: [ './schedule.component.scss' ]
})
export class ScheduleComponent implements OnInit, OnDestroy {
	subscriptions: Subscription[] = [];
	date$: Observable<Date>;
	constructor(private scheduleService: ScheduleService, private store: Store) {}

	ngOnInit() {
		this.date$ = this.store.select('date');
		this.subscriptions = [ this.scheduleService.schedule$.subscribe() ];
	}
	ngOnDestroy() {
		this.subscriptions.forEach((subscription) => subscription.unsubscribe());
	}

	changeDate(date: Date) {
		this.scheduleService.updateDate(date);
	}
}
