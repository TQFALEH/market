import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brand',
})
export class BrandPipe implements PipeTransform {
  transform(goods: any, term: string): any {
    if (term === undefined) return goods;
    return goods.filter(function (car: any) {
      return car.brand.toLowerCase().includes(term.toLowerCase());
    });
  }
}
