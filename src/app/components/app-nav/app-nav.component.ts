import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './app-nav.component.html',
	styleUrls: [ './app-nav.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavComponent implements OnInit {
	activeLink = '';
	constructor(private route: ActivatedRoute) {
		console.log(this.route.outlet);
	}
	ngOnInit() {}
}
