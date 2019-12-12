import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from 'store';
import { distinctUntilChanged, tap } from 'rxjs/operators';

export interface User {
	email: string;
	uid: string;
	authenticated: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	auth$ = this.af.authState.pipe(
		tap((next) => {
			if (!next) {
				this.store.set('user', null);
				return;
			}
			const user: User = {
				email: next.email,
				uid: next.uid,
				authenticated: true
			};
			this.store.set('user', user);
		})
	);

	constructor(private af: AngularFireAuth, private store: Store) {}

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

	logoutUser(): Promise<void> {
		return this.af.auth.signOut();
	}
}
