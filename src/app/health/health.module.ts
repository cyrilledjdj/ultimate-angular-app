import { NgModule } from '@angular/core';

import { HealthRoutingModule } from './health-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [],
	imports: [ HealthRoutingModule, SharedModule.forRoot() ]
})
export class HealthModule {}
