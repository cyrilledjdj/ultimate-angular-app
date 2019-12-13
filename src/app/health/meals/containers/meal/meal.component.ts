import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
	selector: 'meal',
	templateUrl: './meal.component.html',
	styleUrls: [ './meal.component.scss' ]
})
export class MealComponent implements OnInit {
	constructor(private mealsService: MealsService, private router: Router) {}

	ngOnInit() {}

	async addMeal(data: Meal) {
		await this.mealsService.addMeal(data);
		this.backToMeals();
	}

	backToMeals() {
		this.router.navigate([ 'meals' ]);
	}
}
