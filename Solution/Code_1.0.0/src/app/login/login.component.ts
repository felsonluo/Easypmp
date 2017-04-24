import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { TranslateService } from 'ng2-translate';

import { LoginService } from '../services/loginService';
import { UserService } from '../services/userService';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch, AlertModule } from 'ng2-bootstrap';
import { User } from '../model/user';

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html',
  moduleId: module.id,
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit, AfterViewInit {
  public asyncSelected: string;
  public typeaheadLoading: boolean;
  public typeaheadNoResults: boolean;
  public dataSource: Observable<any>;
  public currentLang: string = 'zh-cn';
  public toyear = new Date().getFullYear();

  public loginForm: FormGroup;

  public user: User = new User();

  public users: User[] = [];

  public loginSuccess: boolean;

  public loginFail: boolean;

  public formErrors = {
    'email': '',
    'password': '',
  };

  public validationMessages: {};

  constructor(
    public fb: FormBuilder,
    public translate: TranslateService,
    public cookie: CookieService,
    public loginService: LoginService,
    public userService: UserService) {

    this.translate.addLangs(["zh-cn", "zh-hk", "en"]);
    this.translate.setDefaultLang('zh-cn');

    var langInCookie = cookie.get('mg-lang');
    var browserLang = this.translate.getBrowserLang();
    this.currentLang = langInCookie ? langInCookie : browserLang.match(/zh-cn|en|zh-hk/) ? browserLang : 'zh-cn';
    this.translate.use(this.currentLang);

    this.cookie.put('mg-lang', this.currentLang);

    this.translate.get('login').subscribe(res => {

      document.title = res['welcome'];

      this.validationMessages = {
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

    this.userService.getUserList().subscribe(data => {
      data.map(d => this.users.push({ email: d }));
    });
  }

  ngOnInit() {

    this.buildForm();
  }

  ngAfterViewInit(): void {

    this.loginForm.valueChanges.debounceTime(500).subscribe(data => this.onValueChanged(data));
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      "email": [
        this.user.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password": [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    });

    this.dataSource = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.asyncSelected);
      })
      .mergeMap((token: string) => this.getStatesAsObservable(token));
  }

  onValueChanged(data?: any) {


    if (!this.loginForm) return;

    const form = this.loginForm;

    for (const field in this.formErrors) {

      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {

        const message = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  onSubmit(): void {
    this.onValueChanged();

    if (this.loginForm.valid) {

      this.loginService.login(this.user).subscribe(data => {

        this.loginFail = !(this.loginSuccess = data);
      });
    } // {first: 'Nancy', last: 'Drew'}
    else {
      console.log('存在不合法的项目');
    }
  }

  public getStatesAsObservable(token: string): Observable<any> {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.users.filter((state: any) => {
        return query.test(state.email);
      })
    );
  }

  public changeEmailLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }


  public emailOnSelect(e: TypeaheadMatch): void {

  }

  public changeLang(lang: string) {

    this.cookie.put('mg-lang', lang);

    window.location.reload();
  }
}