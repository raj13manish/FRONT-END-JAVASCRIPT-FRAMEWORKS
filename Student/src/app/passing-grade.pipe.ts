import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passingGrade',
  standalone: true
})
export class PassingGradePipe implements PipeTransform {
  transform(students: any[], minGrade: number): any[] {
    return students.filter(student => student.grade >= minGrade);
  }
}