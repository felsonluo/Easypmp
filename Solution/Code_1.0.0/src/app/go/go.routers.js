"use strict";
var dashboard_component_1 = require('./dashboard/dashboard.component');
exports.GoRoutes = [
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];
//# sourceMappingURL=go.routers.js.map