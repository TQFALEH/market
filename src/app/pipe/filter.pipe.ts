import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(goods: any, term: string): any {
    if (term === undefined) return goods;
    return goods.filter(function (car: any) {
      return car.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}
