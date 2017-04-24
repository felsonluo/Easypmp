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
var ng2_translate_1 = require('ng2-translate');
require('rxjs/add/observable/of');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var navigatorService_1 = require('../services/navigatorService');
var GoComponent = (function () {
    function GoComponent(navigatorService, translate) {
        this.navigatorService = navigatorService;
        this.translate = translate;
        this.currentLang = 'zh-cn';
        this.navItems = [{ label: '12' }];
        this.translate.addLangs(["zh-cn", "zh-hk", "en"]);
        this.translate.setDefaultLang('zh-cn');
        var langInCookie = localStorage.getItem('mg-lang');
        var browserLang = this.translate.getBrowserLang();
        this.currentLang = langInCookie ? langInCookie : browserLang.match(/zh-cn|en|zh-hk/) ? browserLang : 'zh-cn';
        this.translate.use(this.currentLang);
        localStorage.setItem('mg-lang', this.currentLang);
        this.translate.get('go.common').subscribe(function (res) {
            document.title = res['MegiManagement'];
        });
    }
    GoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var langs = this.translate.get('go.common');
        this.navigatorService.getNavigatorList().subscribe(function (data) {
            _this.navBottomModel = data.slice(-1)[0];
            _this.navTopModels = data.slice(0, data.length - 1);
            _this.navItems = _this.translateNav2Items([_this.navBottomModel], langs) || _this.navItems;
            console.log(_this.navBottomModel);
            console.log(_this.navTopModels);
            console.log(_this.navItems);
        });
    };
    GoComponent.prototype.translateNav2Items = function (navs, langs) {
        var translations = this.translate.getTranslation(this.translate.currentLang);
        translations.subscribe(function (data) { return console.log(data['go.common.Welcome']); });
        var is = [{}];
        var _loop_1 = function() {
            var l = '';
            langs.subscribe(function (res) { return l = res[navs[i].nameKey]; });
            is.push({
                label: '123',
                items: !!navs[i].children && navs[i].children.length > 0 ? this_1.translateNav2Items(navs[i].children, langs) : undefined
            });
        };
        var this_1 = this;
        for (var i = 0; i < 1; i++) {
            _loop_1();
        }
        return is;
    };
    __decorate([
        core_1.ViewChild(ng2_bootstrap_1.PopoverDirective), 
        __metadata('design:type', ng2_bootstrap_1.PopoverDirective)
    ], GoComponent.prototype, "popover", void 0);
    GoComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './go.component.html',
            styleUrls: ['./go.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [navigatorService_1.NavigatorService, ng2_translate_1.TranslateService])
    ], GoComponent);
    return GoComponent;
}());
exports.GoComponent = GoComponent;
//# sourceMappingURL=go.component.js.map