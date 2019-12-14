import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
	selector: 'schedule-calendar',
	templateUrl: './schedule-calendar.component.html',
	styleUrls: [ './schedule-calendar.component.scss' ]
})
export class ScheduleCalendarComponent implements OnInit, OnChanges {
	selectedDay: Date;
	selectedWeek: Date;
	selectedDayIndex: number;
	@Input()
	set date(date: Date) {
		this.selectedDay = new Date(date.getTime());
	}
	@Output() dateChange = new EventEmitter<Date>();

	constructor() {}
	ngOnInit() {}
	ngOnChanges() {
		this.selectedDayIndex = this.getToday(this.selectedDay);
		this.selectedWeek = this.getStartOfWeek(new Date(this.selectedDay));
	}

	onChange(weekOffset: number) {
		const startOfWeek = this.getStartOfWeek(new Date());
		const startDate = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate());
		startDate.setDate(startDate.getDate() + weekOffset * 7);
		this.dateChange.emit(startDate);
	}

	selectDay(index: number) {
		const selectedDay = new Date(this.selectedWeek);
		selectedDay.setDate(selectedDay.getDate() + index);
		this.dateChange.emit(selectedDay);
	}

	private getStartOfWeek(date: Date) {
		const day = date.getDay();
		const diff = date.getDate() - day + (day === 0 ? -6 : 1);
		return new Date(date.setDate(diff));
	}

	private getToday(date: Date): number {
		const today = date.getDay() - 1;
		return today < 0 ? 6 : today;
	}
}
