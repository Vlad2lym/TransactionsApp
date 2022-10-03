import { Component } from '@angular/core';
import { transactions } from 'src/app/data/transactions';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent{
  transactions = JSON.parse(transactions)
}
