import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from '../interfaces/ProductInterface';

@Pipe({
  name: 'adminSearch'
})
export class AdminSearchPipe implements PipeTransform {

  transform(products: ProductInterface[], productName = ''): any {
    if (!productName.trim()) {
      return products;
    }

    return products.filter((product) => {
      return product.title.toLowerCase().includes(productName.toLowerCase());
    })
  }

}
