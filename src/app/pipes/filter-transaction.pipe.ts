import { Pipe, PipeTransform } from '@angular/core';
import { ITransaction } from '../models/transaction';

@Pipe({
  name: 'filterTransaction'
})
export class FilterTransactionPipe implements PipeTransform {

  transform(data: ITransaction[], typeFilter: string) {
    return data.filter(item => item.type === typeFilter)
  }

}