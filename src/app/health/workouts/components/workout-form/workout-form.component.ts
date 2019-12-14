import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Workout } from '../../../shared/services/workouts/workouts.service';

@Component({
	selector: 'workout-form',
	templateUrl: './workout-form.component.html',
	styleUrls: [ './workout-form.component.scss' ]
})
export class WorkoutFormComponent implements OnInit, OnChanges {
	@Output() create = new EventEmitter<Workout>();
	@Output() update = new EventEmitter<Workout>();
	@Output() remove = new EventEmitter<Workout>();

	@Input() workout: Workout;

	toggled = false;
	exists = false;

	form: FormGroup = this.fb.group({
		name: this.fb.control('', [ Validators.required ])
	});

	get required() {
		return this.form.get('name').hasError('required') && this.form.get('name').touched;
	}
	// get ingredients() {
	// 	return this.form.get('ingredients') as FormArray;
	// }

	constructor(private fb: FormBuilder) {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		// if (changes.meal.currentValue.name) {
		// 	this.exists = true;
		// 	const value = this.workout;
		// 	this.form.patchValue(value);
		// 	this.emptyIngredients();
		// 	if (value.ingredients) {
		// 		for (const item of value.ingredients) {
		// 			this.ingredients.push(this.fb.control(item));
		// 		}
		// 	}
		// }
	}

	// emptyIngredients() {
	// 	while (this.ingredients.controls.length) {
	// 		this.ingredients.removeAt(0);
	// 	}
	// }

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

	// addIngredient() {
	// 	this.ingredients.push(new FormControl(''));
	// }

	// removeIngredient(index: number) {
	// 	this.ingredients.removeAt(index);
	// }

	toggle() {
		this.toggled = !this.toggled;
	}
}
