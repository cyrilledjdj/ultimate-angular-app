import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
		return [ `../meals`, item.$key ];
	}

	toggle() {
		this.toggled = !this.toggled;
	}

	removeItem() {
		this.remove.emit(this.item);
	}
}
