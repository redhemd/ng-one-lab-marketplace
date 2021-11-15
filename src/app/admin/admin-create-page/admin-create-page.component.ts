import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-admin-create-page',
  templateUrl: './admin-create-page.component.html',
  styleUrls: ['./admin-create-page.component.scss']
})
export class AdminCreatePageComponent implements OnInit {
  form: FormGroup;
  submitBool = false;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      img: new FormControl(null, Validators.required),
      isNew: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitBool = true;

    const product = {
      img: this.form.value.img,
      isNew: this.form.value.isNew,
      price: this.form.value.price,
      title: this.form.value.title,
      type: this.form.value.type,
      info: this.form.value.info,
      date: new Date(),
    }

    this.productService.create(product).subscribe(
      (res) => {
        this.form.reset();
        this.submitBool = false;
        this.router.navigate(['/admin', 'products'])
      }
    )
  }
}
