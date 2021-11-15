
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.scss']
})
export class AdminEditPageComponent implements OnInit {
  product;
  form: FormGroup;
  submitBool = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap((params) => {
        return this.productService.getById(params['id']);
      })
    )
    .subscribe((product) => {
      this.product = product;
      this.form = new FormGroup({
        img: new FormControl(this.product.img, Validators.required),
        isNew: new FormControl(this.product.isNew, Validators.required),
        price: new FormControl(this.product.price, Validators.required),
        title: new FormControl(this.product.title, Validators.required),
        type: new FormControl(this.product.type, Validators.required),
        info: new FormControl(this.product.info, Validators.required)
      })
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitBool = true;

    this.productService.update({
      ...this.product,
      img: this.form.value.img,
      isNew: this.form.value.isNew,
      price: this.form.value.price,
      title: this.form.value.title,
      type: this.form.value.type,
      info: this.form.value.info,
      date: new Date(),
    })
    .subscribe(() => {
      this.submitBool = false;
      this.router.navigate(['/admin', 'products']);
    })
  }

}
