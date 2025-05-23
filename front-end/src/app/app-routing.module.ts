import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

// Layout + Menu principal
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './dashboard/menu/menu.component';

// Categoria
import { CategoryComponent } from './dashboard/category/category.component';
import { NewCategoryComponent } from './dashboard/category/new-category/new-category.component';

// Produto
import { ProdutcComponent } from './dashboard/produtc/produtc.component';
import { NewProductComponent } from './dashboard/produtc/new-product/new-product.component';

// Pedidos
import { OrdersComponent } from './dashboard/orders/orders.component';
import { NewOrdersComponent } from './dashboard/orders/new-orders/new-orders.component';
import { OrdersDetailsComponent } from './dashboard/orders/orders-details/orders-details.component';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { EditCategoryComponent } from './dashboard/category/edit-category/edit-category.component';
import { EditProductComponent } from './dashboard/produtc/edit-product/edit-product.component';
import { UserComponent } from './dashboard/user/user.component';
import { ListProductByCategoryComponent } from './dashboard/produtc/list-product-by-category/list-product-by-category.component';
import { MenuCardapioComponent } from './dashboard/menu-cardapio/menu-cardapio.component';

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
      { path: 'produtos/categoria/editar', component: ProdutcComponent },
      { path: 'produtos/editar', component: EditProductComponent },
      { path: 'produtos/lista-produtos', component: ListProductByCategoryComponent },

      // Pedidos
      { path: 'pedidos', component: OrdersComponent },
      { path: 'pedidos/novo', component: NewOrdersComponent },
      { path: 'pedidos/ativos', component: OrdersComponent }, 
      { path: 'pedidos/:id', component: OrdersDetailsComponent },

      // Usuarios
      { path: 'usuarios', component: UserComponent },

      // Cardapio
      { path: 'cardapio', component: MenuCardapioComponent },

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
