import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(value: { name: string, iconName: string }[], input: string): any {
    if (input) {
      return value.filter(val => val.name.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
  }
}
