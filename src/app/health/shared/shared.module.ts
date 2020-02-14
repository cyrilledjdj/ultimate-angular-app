import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ListItemComponent } from './components/list-item/list-item.component';
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';
import { MealsService } from './services/meals/meals.service';
import { ScheduleService } from './services/schedule/schedule.service';
import { WorkoutsService } from './services/workouts/workouts.service';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
	declarations: [ ListItemComponent, JoinPipe, WorkoutPipe ],
	imports: [ CommonModule, SharedRoutingModule, AngularFireDatabaseModule ],
	exports: [ ListItemComponent, JoinPipe, WorkoutPipe ]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule,
			providers: [ MealsService, WorkoutsService, ScheduleService ]
		};
	}
}
