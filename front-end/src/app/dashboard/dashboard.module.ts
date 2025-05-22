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
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { EditProductComponent } from './produtc/edit-product/edit-product.component';
import { ListProductByCategoryComponent } from './produtc/list-product-by-category/list-product-by-category.component';
import { ActiveComponent } from './orders/active/active.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { TablesComponent } from './tables/tables.component';
import { TablesOpenComponent } from './tables/tables-open/tables-open.component';
import { EditTableComponent } from './tables/edit-table/edit-table.component';
import { TablesCloseComponent } from './tables/tables-close/tables-close.component';
import { FormsModule } from '@angular/forms';



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
    TablesCloseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class DashboardModule { }
