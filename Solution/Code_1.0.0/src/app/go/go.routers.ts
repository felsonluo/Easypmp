import { RouterModule } from "@angular/router";

import { GoComponent } from './go.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const GoRoutes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];