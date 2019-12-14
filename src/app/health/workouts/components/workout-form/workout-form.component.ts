import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Workout } from '../../../shared/services/workouts/workouts.service';

@Component({
	selector: 'workout-form',
	templateUrl: './workout-form.component.html',
	styleUrls: [ './workout-form.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutFormComponent implements OnInit, OnChanges {
	@Output() create = new EventEmitter<Workout>();
	@Output() update = new EventEmitter<Workout>();
	@Output() remove = new EventEmitter<Workout>();

	@Input() workout: Workout;

	toggled = false;
	exists = false;

	form: FormGroup = this.fb.group({
		name: this.fb.control('', [ Validators.required ]),
		type: 'strength',
		strength: this.fb.group({
			reps: 0,
			sets: 0,
			weight: 0
		}),
		endurance: this.fb.group({
			distance: 0,
			duration: 0
		})
	});

	get required() {
		return this.form.get('name').hasError('required') && this.form.get('name').touched;
	}
	// get ingredients() {
	// 	return this.form.get('ingredients') as FormArray;
	// }

	constructor(private fb: FormBuilder) {}

	get placeholder() {
		return `e.g. ${this.form.get('type').value === 'strength' ? 'Benchpress' : 'Treadmill'}`;
	}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.workout.currentValue.name) {
			this.exists = true;
			const value = this.workout;
			this.form.patchValue(value);
		}
	}

	createWorkout() {
		if (this.form.valid) {
			this.create.emit(this.form.value);
		}
	}

	updateWorkout() {
		if (this.form.valid) {
			this.update.emit(this.form.value);
		}
	}

	removeWorkout() {
		this.remove.emit(this.form.value);
	}

	toggle() {
		this.toggled = !this.toggled;
	}
}
