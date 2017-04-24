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
var forms_1 = require('@angular/forms');
var cookies_service_1 = require('angular2-cookie/services/cookies.service');
var ng2_translate_1 = require('ng2-translate');
var loginService_1 = require('../services/loginService');
var userService_1 = require('../services/userService');
require('rxjs/add/observable/of');
var Observable_1 = require('rxjs/Observable');
var user_1 = require('../model/user');
var LoginComponent = (function () {
    function LoginComponent(fb, translate, cookie, loginService, userService) {
        var _this = this;
        this.fb = fb;
        this.translate = translate;
        this.cookie = cookie;
        this.loginService = loginService;
        this.userService = userService;
        this.currentLang = 'zh-cn';
        this.toyear = new Date().getFullYear();
        this.user = new user_1.User();
        this.users = [];
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.translate.addLangs(["zh-cn", "zh-hk", "en"]);
        this.translate.setDefaultLang('zh-cn');
        var langInCookie = cookie.get('mg-lang');
        var browserLang = this.translate.getBrowserLang();
        this.currentLang = langInCookie ? langInCookie : browserLang.match(/zh-cn|en|zh-hk/) ? browserLang : 'zh-cn';
        this.translate.use(this.currentLang);
        this.cookie.put('mg-lang', this.currentLang);
        this.translate.get('login').subscribe(function (res) {
            document.title = res['welcome'];
            _this.validationMessages = {
                'email': {
                    'required': res['emailRequired'],
                    'pattern': res['emailFormatError']
                },
                'password': {
                    'required': res['passwordRequired'],
                    'minlength': res['lengthOfPasswordAtLest8']
                },
            };
        });
        this.userService.getUserList().subscribe(function (data) {
            data.map(function (d) { return _this.users.push({ email: d }); });
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loginForm.valueChanges.debounceTime(500).subscribe(function (data) { return _this.onValueChanged(data); });
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginForm = this.fb.group({
            "email": [
                this.user.email,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
                ]
            ],
            "password": [
                this.user.password,
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8)
                ]
            ]
        });
        this.dataSource = Observable_1.Observable
            .create(function (observer) {
            // Runs on every search
            observer.next(_this.asyncSelected);
        })
            .mergeMap(function (token) { return _this.getStatesAsObservable(token); });
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm)
            return;
        var form = this.loginForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + ' ';
                }
            }
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.onValueChanged();
        if (this.loginForm.valid) {
            this.loginService.login(this.user).subscribe(function (data) {
                _this.loginFail = !(_this.loginSuccess = data);
            });
        } // {first: 'Nancy', last: 'Drew'}
        else {
            console.log('存在不合法的项目');
        }
    };
    LoginComponent.prototype.getStatesAsObservable = function (token) {
        var query = new RegExp(token, 'ig');
        return Observable_1.Observable.of(this.users.filter(function (state) {
            return query.test(state.email);
        }));
    };
    LoginComponent.prototype.changeEmailLoading = function (e) {
        this.typeaheadLoading = e;
    };
    LoginComponent.prototype.emailOnSelect = function (e) {
    };
    LoginComponent.prototype.changeLang = function (lang) {
        this.cookie.put('mg-lang', lang);
        window.location.reload();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './login.component.html',
            moduleId: module.id,
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, ng2_translate_1.TranslateService, cookies_service_1.CookieService, loginService_1.LoginService, userService_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map