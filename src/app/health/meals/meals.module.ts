import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MealComponent } from './containers/meal/meal.component';
import { MealsComponent } from './containers/meals/meals.component';
import { MealsRoutingModule } from './meals-routing.module';

@NgModule({
	declarations: [ MealsComponent, MealComponent ],
	imports: [ CommonModule, MealsRoutingModule, SharedModule ]
})
export class MealsModule {}
