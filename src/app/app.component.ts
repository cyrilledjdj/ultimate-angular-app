import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from 'store';

import { AuthService, User } from './auth/shared/services/auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'angular-pro-app';
	user$: Observable<User>;
	subscription: Subscription;

	constructor(private store: Store, private authService: AuthService) {}

	ngOnInit() {
		this.subscription = this.authService.auth$.subscribe();
		this.user$ = this.store.select<User>('user');
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
