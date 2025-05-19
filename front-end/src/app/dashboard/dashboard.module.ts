import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProdutcComponent } from './produtc/produtc.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';



@NgModule({
  declarations: [
    CategoryComponent,
    ProdutcComponent,
    OrdersComponent,
    OrdersDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
