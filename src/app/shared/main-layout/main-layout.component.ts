import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/admin/shared/services/product.service';
import { AuthService } from '../../admin/shared/services/auth.service'
import { ShopPageComponent } from '../../shop-page/shop-page.component'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  productName;
  products$;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

  goToAdmin() {
    if (this.authService.isAuth()) {
      this.router.navigate(['admin', 'products']);
    } else {
      this.router.navigate(['admin']);
    }
  }
}
