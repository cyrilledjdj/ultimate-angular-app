import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../auth/shared/services/auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './app-header.component.html',
	styleUrls: [ './app-header.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
	@Output() logout = new EventEmitter<any>();
	@Input() user: User;

	logoutUser() {
		this.logout.emit();
	}
}
