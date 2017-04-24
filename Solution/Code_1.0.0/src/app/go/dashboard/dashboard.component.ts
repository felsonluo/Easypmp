import { Component, OnInit } from '@angular/core';
import { UIChart, PanelModule } from 'primeng/primeng'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  moduleId: module.id
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: [],
      datasets: [
        {
          label: '所有账户',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    }
  }

  ngOnInit() {
  }

}
