import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './auth/login/login.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { UserComponent } from './dashboard/user/user.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { TablesComponent } from './dashboard/tables/tables.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProdutcComponent } from './dashboard/produtc/produtc.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { ActiveComponent } from './dashboard/orders/active/active.component';
import { ProfileComponent } from './dashboard/user/profile/profile.component';
import { NewOrdersComponent } from './dashboard/orders/new-orders/new-orders.component';
import { MenuCardapioComponent } from './dashboard/menu-cardapio/menu-cardapio.component';
import { OrderItemsComponent } from './dashboard/orders/order-items/order-items.component';
import { TrackOrderComponent } from './dashboard/orders/track-order/track-order.component';
import { NewProductComponent } from './dashboard/produtc/new-product/new-product.component';
import { EditProductComponent } from './dashboard/produtc/edit-product/edit-product.component';
import { NewCategoryComponent } from './dashboard/category/new-category/new-category.component';
import { EditCategoryComponent } from './dashboard/category/edit-category/edit-category.component';
import { OrdersDetailsComponent } from './dashboard/orders/orders-details/orders-details.component';
import { TablesAvailableComponent } from './dashboard/tables/tables-available/tables-available.component';
import { ListProductByCategoryComponent } from './dashboard/produtc/list-product-by-category/list-product-by-category.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [

      { path: 'menu', component: MenuComponent },
      
      // Categorias
      { path: 'categorias', component: CategoryComponent },
      { path: 'categorias/nova', component: NewCategoryComponent },
      { path: 'categorias/editar', component: EditCategoryComponent },
      
      // Produtos
      { path: 'produtos', component: ProdutcComponent },
      { path: 'produtos/novo', component: NewProductComponent },
      { path: 'produtos/editar', component: EditProductComponent },
      { path: 'produtos/categoria/editar', component: ProdutcComponent },
      { path: 'produtos/lista-produtos', component: ListProductByCategoryComponent },
      
      // Pedidos
      { path: 'pedidos', component: OrdersComponent },
      { path: 'pedidos/ativos', component: ActiveComponent }, 
      { path: 'pedidos/novo', component: NewOrdersComponent },
      { path: 'pedidos/items', component: OrderItemsComponent },
      { path: 'pedidos/:id', component: OrdersDetailsComponent },
      { path: 'pedidos/track', component: TrackOrderComponent },
      
      // Usuarios
      { path: 'usuarios', component: UserComponent },
      { path: 'usuarios-perfil', component: ProfileComponent },
      
      // Cardapio
      { path: 'cardapio', component: MenuCardapioComponent },

      // Mesas
      { path: 'mesas', component: TablesComponent },
      { path: 'mesas/disponivel', component: TablesAvailableComponent },
    
      // Quando não encontrar a pagina
      { path: '', redirectTo: 'menu', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
