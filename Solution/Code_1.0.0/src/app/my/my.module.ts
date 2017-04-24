import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {SplitButtonModule,DataTableModule} from 'primeng/primeng';

import { TypeaheadModule, ButtonsModule, AlertModule, TabsModule, PopoverModule } from 'ng2-bootstrap';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';


import { NavigatorService } from '../services/navigatorService';

import { MyComponent } from './my.component';
import { NavComponent } from './nav/nav.component';
import { OrgListComponent } from './org-list/org-list.component';
import { MyRoutes } from "./my.routers";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './src/app/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    HttpModule,
    JsonpModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    RouterModule.forRoot(MyRoutes),
    SplitButtonModule,
    DataTableModule
  ],
  declarations: [MyComponent, NavComponent, OrgListComponent],
  providers: [ControlContainer, NavigatorService],
  bootstrap: [MyComponent],
  schemas: []
})
export class MyModule { }
