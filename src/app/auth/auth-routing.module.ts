import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
	{
		path: 'auth',
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'login' },
			{ path: 'login', loadChildren: () => import('./login/login.module').then((mod) => mod.LoginModule) },
			{
				path: 'register',
				loadChildren: () => import('./register/register.module').then((mod) => mod.RegisterModule)
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(ROUTES) ],
	exports: [ RouterModule ]
})
export class AuthRoutingModule {}
