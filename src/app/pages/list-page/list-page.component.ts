import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { transactions } from 'src/app/data/transactions';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {
  tab: any
  transactions = JSON.parse(transactions)
  typeFilter = ['income', 'outcome', 'loan', 'investment']


  private querySubscription: Subscription

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.tab = queryParam['tab']
    })
   }

  goToTab0 () {
    this.router.navigate(['navigator'], {queryParams: {'tab': 0}})
  }

  goToTab1 () {
    this.router.navigate(['navigator'], {queryParams: {'tab': 1}})
  }

  goToTab2 () {
    this.router.navigate(['navigator'], {queryParams: {'tab': 2}})
  }

  goToTab3 () {
    this.router.navigate(['navigator'], {queryParams: {'tab': 3}})
  }

}
