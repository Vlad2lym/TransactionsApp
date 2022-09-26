import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from '../models/transaction';

@Pipe({
  name: 'filterTransaction'
})
export class FilterTransactionPipe implements PipeTransform {

  transform(data: ITransaction[], typeFilter: string) {
    let result: any = [];
    data.filter(item => item.type === typeFilter).map(item => {
        result.push([`${item.name.first} ${item.name.last}`, Math.floor(item.address.length*(1 + Math.random()*99))])
    })
    return result;
  }

}