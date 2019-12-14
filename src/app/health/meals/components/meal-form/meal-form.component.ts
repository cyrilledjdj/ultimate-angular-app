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
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
	selector: 'meal-form',
	templateUrl: './meal-form.component.html',
	styleUrls: [ './meal-form.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnInit, OnChanges {
	@Output() create = new EventEmitter<Meal>();
	@Output() update = new EventEmitter<Meal>();
	@Output() remove = new EventEmitter<Meal>();

	@Input() meal: Meal;

	toggled = false;
	exists = false;

	form: FormGroup = this.fb.group({
		name: this.fb.control('', [ Validators.required ]),
		ingredients: this.fb.array([ '' ])
	});

	get required() {
		return this.form.get('name').hasError('required') && this.form.get('name').touched;
	}
	get ingredients() {
		return this.form.get('ingredients') as FormArray;
	}

	constructor(private fb: FormBuilder) {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.meal.currentValue.name) {
			this.exists = true;
			const value = this.meal;
			this.form.patchValue(value);

			this.emptyIngredients();

			if (value.ingredients) {
				for (const item of value.ingredients) {
					this.ingredients.push(this.fb.control(item));
				}
			}
		}
	}

	emptyIngredients() {
		while (this.ingredients.controls.length) {
			this.ingredients.removeAt(0);
		}
	}

	createMeal() {
		if (this.form.valid) {
			this.create.emit(this.form.value);
		}
	}

	updateMeal() {
		if (this.form.valid) {
			this.update.emit(this.form.value);
		}
	}

	removeMeal() {
		this.remove.emit(this.form.value);
	}

	addIngredient() {
		this.ingredients.push(new FormControl(''));
	}

	removeIngredient(index: number) {
		this.ingredients.removeAt(index);
	}

	toggle() {
		this.toggled = !this.toggled;
	}
}
