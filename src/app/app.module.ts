import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { FilterTransactionPipe } from './pipes/filter-transaction.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
    ListPageComponent,
    FilterTransactionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
