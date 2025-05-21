import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { OrdersDetailsComponent } from './dashboard/orders/orders-details/orders-details.component';
import { LayoutComponent } from './layout/layout.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { AuthGuard } from './guards/auth.guard';
import { ProdutcComponent } from './dashboard/produtc/produtc.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { NewCategoryComponent } from './dashboard/category/new-category/new-category.component';
import { NewOrdersComponent } from './dashboard/orders/new-orders/new-orders.component';
import { NewProductComponent } from './dashboard/produtc/new-product/new-product.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
   // canActivate: [AuthGuard],
    children: [
      { path: 'menu', component: MenuComponent}, // Minha página inical
      { path: 'categoria', component: CategoryComponent },
      { path: 'categoria/nova', component: NewCategoryComponent },
      { path: 'produto', component: ProdutcComponent },
      { path: 'produto/novo', component: NewProductComponent },
      { path: 'pedidos', component: OrdersComponent },
      { path: 'pedidos/novo', component: NewOrdersComponent },
      { path: 'pedido/:id', component: OrdersDetailsComponent },
      { path: '', redirectTo: 'pedidos', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
