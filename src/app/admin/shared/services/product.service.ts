import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FirebaseResponseInterface } from '../interfaces/FirebaseResponseInterface';
import { ProductInterface } from '../interfaces/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  type = 'all';
  cartOfProducts: ProductInterface[] = [];

  constructor(private httpClient: HttpClient) {}

  setType(type) {
    this.type = type;
  }

  create(product) {
    return this.httpClient.post(`${environment.databaseURL}/products.json`, product)
      .pipe(
        map((res: FirebaseResponseInterface) => {
          return {
            ...product,
            id: res.name,
            date: new Date(product.date),
          }
        })
      )
  }

  getAll() {
    return this.httpClient.get(`${environment.databaseURL}/products.json`)
      .pipe(
        map((res) => {
          return Object.keys(res).map((key) => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date),
          }))
        })
      )
  }

  addProduct(product) {
    this.cartOfProducts.push(product);
  }

  getById(id) {
    return this.httpClient
      .get(`${environment.databaseURL}/products/${id}.json`)
      .pipe(
        map((response: ProductInterface) => {
          return {
            ...response,
            id,
            date: new Date(response.date),
          };
        })
      );
  }

  delete(id) {
    return this.httpClient.delete(
      `${environment.databaseURL}/products/${id}/.json`
    );
  }

  update(product: ProductInterface) {
    return this.httpClient.patch(
      `${environment.databaseURL}/products/${product.id}/.json`,
      product
    );
  }


}
