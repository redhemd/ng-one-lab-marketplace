import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../admin/shared/services/product.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  @Input() public productName;
  type;
  activeToggleAll = true;
  activeTogglePhones;
  activeToggleLaptops;
  activeToggleAppliances;
  activeToggleTvs;
  activeToggleClothes;
  activeToggleToys;
  activeToggleSports;
  activeToggleTools;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
  }

  setType(type) {
    this.type = type;

    this.router.navigate(['/'], {
      queryParams: {
        type: this.type,
      }
    })

    this.productService.setType(this.type);

    if (this.type === 'all') {
      this.activeToggleAll = true;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = false;
      this.activeToggleClothes = false;
      this.activeToggleToys = false;
      this.activeToggleSports = false;
      this.activeToggleTools = false;

    } else if (this.type === 'phones-headphones') {
      this.activeToggleAll = false;
      this.activeTogglePhones = true;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = false;
      this.activeToggleClothes = false;
      this.activeToggleToys = false;
      this.activeToggleSports = false;
      this.activeToggleTools = false;

    } else if (this.type === 'laptops-computers') {
      this.activeToggleAll = false;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = true;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = false;
      this.activeToggleClothes = false;
      this.activeToggleToys = false;
      this.activeToggleSports = false;
      this.activeToggleTools = false;

    } else if (this.type === 'appliances') {
      this.activeToggleAll = false;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = true;
      this.activeToggleTvs = false;
      this.activeToggleClothes = false;
      this.activeToggleToys = false;
      this.activeToggleSports = false;
      this.activeToggleTools = false;

    } else if (this.type === 'tv-cameras') {
      this.activeToggleAll = false;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = true;
      this.activeToggleClothes = false;
      this.activeToggleToys = false;
      this.activeToggleSports = false;
      this.activeToggleTools = false;

    } else if (this.type === 'clothes') {
      this.activeToggleAll = false;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = false;
      this.activeToggleClothes = true;
      this.activeToggleToys = false;
      this.activeToggleSports = false;
      this.activeToggleTools = false;

    } else if (this.type === 'toys') {
      this.activeToggleAll = false;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = false;
      this.activeToggleClothes = false;
      this.activeToggleToys = true;
      this.activeToggleSports = false;
      this.activeToggleTools = false;

    } else if (this.type === 'sport-goods') {
      this.activeToggleAll = false;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = false;
      this.activeToggleClothes = false;
      this.activeToggleToys = false;
      this.activeToggleSports = true;
      this.activeToggleTools = false;

    } else if (this.type === 'tools') {
      this.activeToggleAll = false;
      this.activeTogglePhones = false;
      this.activeToggleLaptops = false;
      this.activeToggleAppliances = false;
      this.activeToggleTvs = false;
      this.activeToggleClothes = false;
      this.activeToggleToys = false;
      this.activeToggleSports = false;
      this.activeToggleTools = true;

    }
  }
}
