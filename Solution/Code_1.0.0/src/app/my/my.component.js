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
var navigatorService_1 = require('../services/navigatorService');
require('rxjs/add/observable/of');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var MyComponent = (function () {
    function MyComponent(navigatorService) {
        this.navigatorService = navigatorService;
    }
    MyComponent.prototype.ngOnInit = function () {
        this.navigatorService.getNavigatorList().subscribe(function (data) {
            data.map(function (x) {
                console.log(x);
            });
        });
    };
    __decorate([
        core_1.ViewChild(ng2_bootstrap_1.PopoverDirective), 
        __metadata('design:type', ng2_bootstrap_1.PopoverDirective)
    ], MyComponent.prototype, "popover", void 0);
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './my.component.html',
            styleUrls: ['./my.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [navigatorService_1.NavigatorService])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=my.component.js.map