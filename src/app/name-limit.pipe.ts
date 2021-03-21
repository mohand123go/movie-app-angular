import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLimit'
})
export class NameLimitPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('value', value)
    return value.slice(0, 20);
  }

}
