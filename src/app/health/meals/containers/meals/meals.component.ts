import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';
import { Store } from 'store';

@Component({
	selector: 'meals',
	templateUrl: './meals.component.html',
	styleUrls: [ './meals.component.scss' ]
})
export class MealsComponent implements OnInit, OnDestroy {
	meals$: Observable<Meal[]>;
	subscription: Subscription;
	constructor(private mealsService: MealsService, private store: Store) {}

	ngOnInit() {
		this.subscription = this.mealsService.meals$.subscribe();
		this.meals$ = this.store.select('meals');
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	removeMeal(data: Meal) {
		this.mealsService.removeMeal(data.$key);
	}
}
