import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './containers/register/register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
	declarations: [ RegisterComponent ],
	imports: [ CommonModule, RegisterRoutingModule ]
})
export class RegisterModule {}
