import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public financialBoxOfficeRevenue: any = null;
  public northwindEmployees: any = null;

  constructor(
    private financialService: FinancialService,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
  }
}
