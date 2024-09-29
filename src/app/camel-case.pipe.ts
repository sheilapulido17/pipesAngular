import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    
    let words = value.split(' ');

    return words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  }
}

