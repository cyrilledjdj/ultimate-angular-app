import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'schedule-days',
	templateUrl: './schedule-days.component.html',
	styleUrls: [ './schedule-days.component.scss' ]
})
export class ScheduleDaysComponent implements OnInit {
	days = [ 'M', 'T', 'W', 'T', 'F', 'S', 'S' ];
	@Input() selected: number;
	@Output() selectEvent = new EventEmitter<number>();

	constructor() {}

	ngOnInit() {}

	selectDay(index: number) {
		this.selectEvent.emit(index);
	}
}
