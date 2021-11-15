import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: '',
        component: ShopPageComponent,
        children: [
          {
            path: '', component: ProductComponent,
          }
        ]
      },
    ],
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
