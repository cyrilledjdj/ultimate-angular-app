import { BehaviorSubject, Observable } from 'rxjs';

import { distinctUntilChanged, pluck } from 'rxjs/operators';

export class Store {
	private subject = new BehaviorSubject<any>({});
	private store = this.subject.asObservable().pipe(distinctUntilChanged());

	get value() {
		return this.subject.value;
	}

	select<T>(name: string): Observable<T> {
		return this.store.pipe(pluck(name));
	}

	set(name: string, newState: any) {
		this.subject.next({ ...this.value, [name]: newState });
	}
}
