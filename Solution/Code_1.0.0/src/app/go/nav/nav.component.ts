import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { PopoverDirective } from 'ng2-bootstrap';

import { Navigator } from '../../model/navigator';

@Component({
  selector: 'mg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  moduleId: module.id
})
export class NavComponent implements OnInit {

  @Input() navSubModels: Navigator[];

  @Input() settingItems: any[];

  constructor(
  ) { }

  ngOnInit() {
  }
}
