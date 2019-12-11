import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	loginUser(data: FormGroup) {
		console.log('Login:', data.value);
	}
}
