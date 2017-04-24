"use strict";
var org_list_component_1 = require('./org-list/org-list.component');
exports.MyRoutes = [
    {
        path: '',
        component: org_list_component_1.OrgListComponent
    },
    {
        path: 'org-list',
        component: org_list_component_1.OrgListComponent
    },
    {
        path: '**',
        loadChildren: './home/home.module#HomeModule'
    }
];
//# sourceMappingURL=my.routers.js.map