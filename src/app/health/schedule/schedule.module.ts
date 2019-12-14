import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ScheduleAssignComponent } from './components/schedule-assign/schedule-assign.component';
import { ScheduleCalendarComponent } from './components/schedule-calendar/schedule-calendar.component';
import { ScheduleControlsComponent } from './components/schedule-controls/schedule-controls.component';
import { ScheduleDaysComponent } from './components/schedule-days/schedule-days.component';
import { ScheduleSectionComponent } from './components/schedule-section/schedule-section.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';

@NgModule({
	declarations: [
		ScheduleComponent,
		ScheduleCalendarComponent,
		ScheduleDaysComponent,
		ScheduleControlsComponent,
		ScheduleSectionComponent,
		ScheduleAssignComponent
	],
	imports: [ CommonModule, ScheduleRoutingModule, SharedModule ]
})
export class ScheduleModule {}
