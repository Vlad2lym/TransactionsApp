import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { transactions } from 'src/app/data/transactions';
import { ITransaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {
  tab: any 
  transactions = JSON.parse(transactions)

  incomeCollection = this.transactions.data.filter((item: ITransaction) => item.type === 'income')
  outcomeCollection = this.transactions.data.filter((item: ITransaction) => item.type === 'outcome')
  loanCollection = this.transactions.data.filter((item: ITransaction) => item.type === 'loan')
  investmentCollection = this.transactions.data.filter((item: ITransaction) => item.type === 'investment')
  
  transactionTypeFilter = [this.incomeCollection, this.outcomeCollection, this.loanCollection, this.investmentCollection]

  private querySubscription: Subscription
  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.tab = queryParam['tab']
    })
  }

  counter(address: string): number {
    return Math.floor(address.length*(1 + Math.random()*99))
  }

  getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
  }
}