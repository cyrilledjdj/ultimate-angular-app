import { Component, OnInit } from '@angular/core';

import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
	selector: 'meal',
	templateUrl: './meal.component.html',
	styleUrls: [ './meal.component.scss' ]
})
export class MealComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	addMeal(data: Meal) {
		console.log('Got the meal', data);
	}
}
