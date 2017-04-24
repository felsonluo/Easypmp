import { RouterModule } from "@angular/router";

import { MyComponent } from './my.component';
import { OrgListComponent } from './org-list/org-list.component';

export const MyRoutes = [
	{
		path: '',
		component: OrgListComponent
	},
	{
		path: 'org-list',
		component: OrgListComponent
	},
	{
		path:'**',//fallback router must in the last
		loadChildren:'./home/home.module#HomeModule'
	}
];