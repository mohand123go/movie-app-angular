import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockAvailability'
})
export class StockAvailabilityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value == true ? 'in-stock' : 'not-available';
  }

}
