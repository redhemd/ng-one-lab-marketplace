import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-admin-products-base-page',
  templateUrl: './admin-products-base-page.component.html',
  styleUrls: ['./admin-products-base-page.component.scss']
})
export class AdminProductsBasePageComponent implements OnInit, OnDestroy {
  products = [];
  productSub: Subscription;
  productUnsub: Subscription;
  productName;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productSub = this.productService.getAll().subscribe(
      (res) => {
        this.products = res;
      }
    )
  }

  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }

    if (this.productUnsub) {
      this.productUnsub.unsubscribe();
    }
  }

  delete(id) {
    this.productUnsub = this.productService.delete(id).subscribe(
      () => {
        this.products = this.products.filter((product) => {
          product.id !== id;
        })
      }
    )
  }
}
