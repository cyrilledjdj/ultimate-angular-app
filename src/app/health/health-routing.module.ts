import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/shared/guards/auth.guard';

const routes: Routes = [
	{
		path: 'schedule',
		canActivate: [ AuthGuard ],
		loadChildren: () => import('./schedule/schedule.module').then((mod) => mod.ScheduleModule)
	},
	{
		path: 'meals',
		canActivate: [ AuthGuard ],
		loadChildren: () => import('./meals/meals.module').then((mod) => mod.MealsModule)
	},
	{
		path: 'workouts',
		canActivate: [ AuthGuard ],
		loadChildren: () => import('./workouts/workouts.module').then((mod) => mod.WorkoutsModule)
	},
	{ path: '**', redirectTo: 'schedule' } // Make health config the default route provider
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class HealthRoutingModule {}
