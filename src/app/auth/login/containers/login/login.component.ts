import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	error: string;
	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {}

	async loginUser(data: FormGroup) {
		try {
			await this.authService.loginUser(data.value);
			this.router.navigate([ '/' ]);
		} catch (err) {
			this.error = err.message;
		}
	}
}
