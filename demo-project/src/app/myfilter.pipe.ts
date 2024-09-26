import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  standalone: true
})
export class MyfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
