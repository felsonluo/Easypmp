import { Component, OnInit } from '@angular/core';
import { SplitButtonModule, MenuItem, DataTable, Column } from 'primeng/primeng';
import { Organisation } from '../../model/organisation';

@Component({
  selector: 'app-org-list',
  templateUrl: './org-list.component.html',
  styleUrls: ['./org-list.component.css'],
  moduleId: module.id
})


export class OrgListComponent implements OnInit {


  public addOrgButtonList: MenuItem;
  public organisationList: Organisation[];
  public totalRecords: number;


  constructor() { }

  ngOnInit() {

    this.addOrgButtonList = [
      {
        label: '标准版', icon: 'fa-refresh', command: () => {
          this.addBasicOrganisation();
        }
      },
      {
        label: '总账版', icon: 'fa-close', command: () => {
          this.addSmartOrganisation();
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
  }


  public addBasicOrganisation(): void {

  }

  public addSmartOrganisation(): void {

  }

}
