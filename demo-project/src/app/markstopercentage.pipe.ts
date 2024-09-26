import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markstopercentage',
  standalone: true
})
export class MarkstopercentagePipe implements PipeTransform {

  transform(value: number, total: number): string {

    const percentage=value/total*100;
    
        return percentage.toFixed(2)+ '%';
      }

}
