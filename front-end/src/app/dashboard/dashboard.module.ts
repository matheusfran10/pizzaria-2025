import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProdutcComponent } from './produtc/produtc.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';
import { RouterModule } from '@angular/router';
import { NewProductComponent } from './produtc/new-product/new-product.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { NewOrdersComponent } from './orders/new-orders/new-orders.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ProdutcComponent,
    OrdersComponent,
    OrdersDetailsComponent,
    NewProductComponent,
    NewCategoryComponent,
    NewOrdersComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DashboardModule { }
