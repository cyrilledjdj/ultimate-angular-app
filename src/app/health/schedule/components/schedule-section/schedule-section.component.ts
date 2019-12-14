import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ScheduleItem } from '../../../shared/services/schedule/schedule.service';

@Component({
	selector: 'schedule-section',
	templateUrl: './schedule-section.component.html',
	styleUrls: [ './schedule-section.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleSectionComponent implements OnInit {
	@Input() name: string;
	@Input() section: ScheduleItem;

	@Output() selectChange = new EventEmitter<any>();
	constructor() {}

	ngOnInit() {}

	onSelect(type: string, assigned: any[] = []) {
		const data = this.section;
		this.selectChange.emit({
			type,
			assigned,
			data
		});
	}
}
