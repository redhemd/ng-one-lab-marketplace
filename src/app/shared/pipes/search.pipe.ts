import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from 'src/app/admin/shared/interfaces/ProductInterface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: ProductInterface[], productName = ''): any {
    if (productName.trim() === undefined ? '' : !productName.trim()) {
      return products;
    }

    return products.filter((product) => {
      return product.title.toLowerCase().includes(productName.toLowerCase());
    })
  }

}
