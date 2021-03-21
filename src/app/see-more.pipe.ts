import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return `${value.slice(0, 150)} ...Seemore`;
  }

}
