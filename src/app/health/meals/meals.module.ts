import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MealFormComponent } from './components/meal-form/meal-form.component';
import { MealComponent } from './containers/meal/meal.component';
import { MealsComponent } from './containers/meals/meals.component';
import { MealsRoutingModule } from './meals-routing.module';

@NgModule({
	declarations: [ MealsComponent, MealComponent, MealFormComponent ],
	imports: [ CommonModule, ReactiveFormsModule, MealsRoutingModule, SharedModule ]
})
export class MealsModule {}
