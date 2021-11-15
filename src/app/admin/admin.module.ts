import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminCreatePageComponent } from "./admin-create-page/admin-create-page.component";
import { AdminEditPageComponent } from "./admin-edit-page/admin-edit-page.component";
import { AdminLoginPageComponent } from "./admin-login-page/admin-login-page.component";
import { AdminOrdersPageComponent } from "./admin-orders-page/admin-orders-page.component";
import { AdminProductsBasePageComponent } from "./admin-products-base-page/admin-products-base-page.component";
import { AdminMainLayoutComponent } from "./shared/admin-main-layout/admin-main-layout.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { QuillModule } from 'ngx-quill';
import { AdminSearchPipe } from './shared/pipes/admin-search.pipe';


@NgModule({
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminMainLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginPageComponent },
          {
            path: 'create',
            component: AdminCreatePageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'products',
            component: AdminProductsBasePageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'orders',
            component: AdminOrdersPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'product/:id/edit',
            component: AdminEditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AdminMainLayoutComponent,
    AdminLoginPageComponent,
    AdminEditPageComponent,
    AdminCreatePageComponent,
    AdminOrdersPageComponent,
    AdminProductsBasePageComponent,
    AdminSearchPipe,
  ],
})
export class AdminModule {}
