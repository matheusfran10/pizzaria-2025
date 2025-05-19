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

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'categoria', component: CategoryComponent },
      { path: 'produto', component: ProdutcComponent },
      { path: 'pedidos', component: OrdersComponent },
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
