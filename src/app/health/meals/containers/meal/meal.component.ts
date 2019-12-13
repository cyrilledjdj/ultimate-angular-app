import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'meal',
	templateUrl: './meal.component.html',
	styleUrls: [ './meal.component.scss' ]
})
export class MealComponent implements OnInit, OnDestroy {
	meal$: Observable<Meal>;
	subscription: Subscription;
	constructor(private mealsService: MealsService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.subscription = this.mealsService.meals$.subscribe();
		this.meal$ = this.route.params.pipe(
			switchMap((param) => {
				return this.mealsService.getMeal(param.id);
			})
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	async addMeal(data: Meal) {
		await this.mealsService.addMeal(data);
		this.backToMeals();
	}

	backToMeals() {
		this.router.navigate([ 'meals' ]);
	}
}
