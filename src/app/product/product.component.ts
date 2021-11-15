import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../admin/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public productName;
  products$;
  productsArray;
  public isShownModal = false;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  sortedAllCards() {
    this.productsArray = this.productService.getAll()
    .subscribe(products => {

    })
  }
}
