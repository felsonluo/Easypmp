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
var http_1 = require('@angular/http');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_translate_1 = require('ng2-translate');
var login_component_1 = require('./login.component');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
var loginService_1 = require('../services/loginService');
var userService_1 = require('../services/userService');
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './src/app/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                forms_1.ReactiveFormsModule,
                ng2_translate_1.TranslateModule.forRoot({
                    provide: ng2_translate_1.TranslateLoader,
                    useFactory: (createTranslateLoader),
                    deps: [http_1.Http]
                }),
                http_1.HttpModule,
                http_1.JsonpModule,
                ng2_bootstrap_1.ButtonsModule.forRoot(),
                ng2_bootstrap_1.TypeaheadModule.forRoot(),
                ng2_bootstrap_1.AlertModule.forRoot()
            ],
            declarations: [
                login_component_1.LoginComponent,
            ],
            bootstrap: [login_component_1.LoginComponent],
            providers: [forms_1.ControlContainer, cookies_service_1.CookieService, loginService_1.LoginService, userService_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map