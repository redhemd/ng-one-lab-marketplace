import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from 'src/app/admin/shared/interfaces/ProductInterface';
import { ProductService } from 'src/app/admin/shared/services/product.service';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  constructor(private productService: ProductService) {}

  transform(products: ProductInterface[], type = ''): any {
    if (type === 'all') {
      return products;
    } else {
      return products.filter((product) => {
        return product.type === type;
      })
    }
  }

}
