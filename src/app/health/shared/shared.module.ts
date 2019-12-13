import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { MealsService } from './services/meals/meals.service';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
	declarations: [],
	imports: [ CommonModule, SharedRoutingModule, AngularFireDatabaseModule ]
})
export class SharedModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [ MealsService ]
		};
	}
}
