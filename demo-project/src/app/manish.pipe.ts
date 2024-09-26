import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'sort'
})
export class SortPipe implements PipeTransform {

transform(array: any[], field: string, ascending: boolean = true): any[] {
if (!Array.isArray(array) || !field) return array;

// Clone the array to avoid mutating the original data
const sortedArray = [...array];

sortedArray.sort((a, b) => {
if (a[field] < b[field]) {
return ascending ? -1 : 1;
} else if (a[field] > b[field]) {
return ascending ? 1 : -1;
} else {
return 0;
}
});

return sortedArray;
}
}