import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Workout, WorkoutsService } from '../../../shared/services/workouts/workouts.service';

@Component({
	selector: 'workout',
	templateUrl: './workout.component.html',
	styleUrls: [ './workout.component.scss' ]
})
export class WorkoutComponent implements OnInit, OnDestroy {
	workout$: Observable<Workout>;
	subscription: Subscription;
	constructor(private workoutsService: WorkoutsService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.subscription = this.workoutsService.workouts$.subscribe();
		this.workout$ = this.route.params.pipe(
			switchMap((param) => {
				return this.workoutsService.getWorkout(param.id);
			})
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	async addWorkout(data: Workout) {
		await this.workoutsService.addWorkout(data);
		this.backToWorkouts();
	}

	async updateWorkout(data: Workout) {
		const key = this.route.snapshot.params.id;
		await this.workoutsService.updateWorkout(key, data);
		this.backToWorkouts();
	}

	async removeWorkout(data: Workout) {
		const key = this.route.snapshot.params.id;
		await this.workoutsService.removeWorkout(key);
		this.backToWorkouts();
	}

	backToWorkouts() {
		this.router.navigate([ 'workouts' ]);
	}
}
