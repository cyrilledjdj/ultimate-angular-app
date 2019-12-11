import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	error: string;
	constructor(private authService: AuthService, private router: Router) {}

	ngOnInit() {}

	async registerUser(data: FormGroup) {
		try {
			await this.authService.createUser(data.value);
			this.router.navigate([ '/' ]);
		} catch (err) {
			this.error = err.message;
		}
	}
}
