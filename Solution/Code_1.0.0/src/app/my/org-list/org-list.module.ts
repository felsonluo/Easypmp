import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgListComponent } from './org-list.component'


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrgListComponent],
  bootstrap: [OrgListComponent]
})
export class OrgListModule { }
