import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
	selector: 'workouts',
	templateUrl: './workouts.component.html',
	styleUrls: [ './workouts.component.scss' ]
})
export class WorkoutsComponent implements OnInit, OnDestroy {
	workouts$: Observable<Workout[]>;
	subscription: Subscription;
	constructor(private workoutsService: WorkoutsService, private store: Store) {}

	ngOnInit() {
		this.subscription = this.workoutsService.workouts$.subscribe();
		this.workouts$ = this.store.select('workouts');
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	removeWorkout(data: Workout) {
		this.workoutsService.removeWorkout(data.$key);
	}
}
