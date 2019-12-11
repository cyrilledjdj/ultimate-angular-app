import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private af: AngularFireAuth) {}

	/**
	 * create a user in the database
	 * @param param.email email of user
	 * @param param.password password of user
	 */
	createUser({ email, password }: { email: string; password: string }): Promise<firebase.auth.UserCredential> {
		return this.af.auth.createUserWithEmailAndPassword(email, password);
	}

	loginUser({ email, password }: { email: string; password: string }): Promise<firebase.auth.UserCredential> {
		return this.af.auth.signInWithEmailAndPassword(email, password);
	}
}
