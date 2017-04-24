import { Component, OnInit, ViewChild, AfterViewInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { TranslateService } from 'ng2-translate';

import { NavigatorService } from '../services/navigatorService';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch, AlertModule, TabsetComponent, PopoverDirective } from 'ng2-bootstrap';

import { NavComponent } from './nav/nav.component';

import { User } from '../model/user';
import { Navigator } from '../model/navigator';

@Component({
  selector: 'my-app',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css'],
  moduleId: module.id
})
export class MyComponent implements OnInit {


  @ViewChild(PopoverDirective) popover: PopoverDirective;

  constructor(
    public navigatorService: NavigatorService
  ) {

  }


  ngOnInit() {

    this.navigatorService.getNavigatorList().subscribe(
      data => {
        data.map(x => {
          console.log(x);
        });
      }
    );
  }

}
