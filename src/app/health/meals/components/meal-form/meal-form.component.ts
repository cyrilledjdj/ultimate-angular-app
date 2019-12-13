import { ChangeDetectionStrategy, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Meal } from '../../../shared/services/meals/meals.service';

@Component({
	selector: 'meal-form',
	templateUrl: './meal-form.component.html',
	styleUrls: [ './meal-form.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnInit {
	@Output() create = new EventEmitter<Meal>();
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

	createMeal() {
		if (this.form.valid) {
			this.create.emit(this.form.value);
		}
	}

	addIngredient() {
		this.ingredients.push(new FormControl(''));
	}

	removeIngredient(index: number) {
		this.ingredients.removeAt(index);
	}
}
