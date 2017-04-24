import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ChartModule, PanelModule, MenuModule, MenuItem, MegaMenuModule } from 'primeng/primeng';

import { TypeaheadModule, ButtonsModule, AlertModule, TabsModule, PopoverModule } from 'ng2-bootstrap';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';


import { NavigatorService } from '../services/navigatorService';

import { GoComponent } from './go.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoRoutes } from "./go.routers";

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
    ChartModule,
    PanelModule,
    MenuModule,
    MegaMenuModule,
    ButtonsModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    PopoverModule.forRoot(),
    RouterModule.forRoot(GoRoutes)
  ],
  declarations: [GoComponent, NavComponent, DashboardComponent],
  providers: [ControlContainer, NavigatorService],
  bootstrap: [GoComponent],
  schemas: []
})
export class GoModule {

}
