"use strict";
var testing_1 = require('@angular/core/testing');
var org_list_component_1 = require('./org-list.component');
describe('OrgListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [org_list_component_1.OrgListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(org_list_component_1.OrgListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=org-list.component.spec.js.map