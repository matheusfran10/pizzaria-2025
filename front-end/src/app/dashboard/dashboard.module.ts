import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { TablesComponent } from './tables/tables.component';
import { ProdutcComponent } from './produtc/produtc.component';
import { CategoryComponent } from './category/category.component';
import { ActiveComponent } from './orders/active/active.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NewOrdersComponent } from './orders/new-orders/new-orders.component';
import { EditTableComponent } from './tables/edit-table/edit-table.component';
import { MenuCardapioComponent } from './menu-cardapio/menu-cardapio.component';
import { TablesOpenComponent } from './tables/tables-open/tables-open.component';
import { OrderItemsComponent } from './orders/order-items/order-items.component';
import { NewProductComponent } from './produtc/new-product/new-product.component';
import { TablesCloseComponent } from './tables/tables-close/tables-close.component';
import { EditProductComponent } from './produtc/edit-product/edit-product.component';
import { NewCategoryComponent } from './category/new-category/new-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { OrdersDetailsComponent } from './orders/orders-details/orders-details.component';
import { ListProductByCategoryComponent } from './produtc/list-product-by-category/list-product-by-category.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProdutcComponent,
    OrdersComponent,
    OrdersDetailsComponent,
    NewProductComponent,
    NewCategoryComponent,
    NewOrdersComponent,
    MenuComponent,
    EditCategoryComponent,
    EditProductComponent,
    ListProductByCategoryComponent,
    ActiveComponent,
    UserComponent,
    ProfileComponent,
    TablesComponent,
    TablesOpenComponent,
    EditTableComponent,
    TablesCloseComponent,
    OrderItemsComponent,
    MenuCardapioComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule

  ]
})
export class DashboardModule { }
