import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MealsService } from '../../services/meals/meals.service';

@Component({
	selector: 'list-item',
	templateUrl: './list-item.component.html',
	styleUrls: [ './list-item.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
	toggled = false;
	@Input() item: any;

	@Output() remove = new EventEmitter<any>();

	constructor(private mealsService: MealsService) {}

	ngOnInit() {}

	getRoute(item: any) {
		return [ `../${item.ingredients ? 'meals' : 'workouts'}`, item.$key ];
	}

	toggle() {
		this.toggled = !this.toggled;
	}

	removeItem() {
		this.remove.emit(this.item);
	}
}
