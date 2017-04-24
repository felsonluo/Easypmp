"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OrgListComponent = (function () {
    function OrgListComponent() {
    }
    OrgListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addOrgButtonList = [
            {
                label: '标准版', icon: 'fa-refresh', command: function () {
                    _this.addBasicOrganisation();
                }
            },
            {
                label: '总账版', icon: 'fa-close', command: function () {
                    _this.addSmartOrganisation();
                }
            }
        ];
        this.organisationList = [
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
            { name: '1', version: '标准版', createDate: new Date(2017, 1, 1), role: '管理员', lastVisitDate: '欧阳万里', expireDate: new Date(2017, 1, 1), payStatus: 0 },
        ];
    };
    OrgListComponent.prototype.addBasicOrganisation = function () {
    };
    OrgListComponent.prototype.addSmartOrganisation = function () {
    };
    OrgListComponent = __decorate([
        core_1.Component({
            selector: 'app-org-list',
            templateUrl: './org-list.component.html',
            styleUrls: ['./org-list.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], OrgListComponent);
    return OrgListComponent;
}());
exports.OrgListComponent = OrgListComponent;
//# sourceMappingURL=org-list.component.js.map