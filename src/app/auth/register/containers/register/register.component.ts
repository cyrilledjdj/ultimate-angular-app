import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	constructor() {}

	ngOnInit() {}

	registerUser(data: FormGroup) {
		console.log('Register:', data.value);
	}
}
