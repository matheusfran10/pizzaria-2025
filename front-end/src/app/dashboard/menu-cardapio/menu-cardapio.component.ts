import { Component } from '@angular/core';
import { Category } from 'src/app/services/models/category';

@Component({
  selector: 'app-menu-cardapio',
  templateUrl: './menu-cardapio.component.html',
  styleUrls: ['./menu-cardapio.component.scss']
})
export class MenuCardapioComponent {
categories: Category[] = [];

  ngOnInit(): void {
    
    this.categories = [
  {
    id: 1,
    name: 'Pizzas',
    created_at: new Date(),
    updated_at: new Date(),
    products: [
      { id: 1, name: 'Calabresa', price: 35, descripiton: 'Com cebola e queijo', banner: 'teste.png', categoryId: 1, created_at: new Date(), updated_at: new Date() },
      { id: 2, name: 'Margherita', price: 32, descripiton: 'Molho de tomate, mussarela e manjericão', banner: 'teste.png', categoryId: 1, created_at: new Date(), updated_at: new Date() },
      { id: 2, name: 'Margherita', price: 32, descripiton: 'Molho de tomate, mussarela e manjericão', banner: 'teste.png', categoryId: 1, created_at: new Date(), updated_at: new Date() },
      { id: 2, name: 'Margherita', price: 32, descripiton: 'Molho de tomate, mussarela e manjericão', banner: 'teste.png', categoryId: 1, created_at: new Date(), updated_at: new Date() },
       ]
  },
  {
    id: 2,
    name: 'Bebidas',
    created_at: new Date(),
    updated_at: new Date(),
    products: [
      { id: 3, name: 'Refrigerante', price: 7, descripiton: 'Coca-Cola lata 350ml', banner: 'teste.png', categoryId: 2, created_at: new Date(), updated_at: new Date() },
      { id: 4, name: 'Cerveja', price: 10, descripiton: 'Heineken long neck', banner: 'teste.png', categoryId: 2, created_at: new Date(), updated_at: new Date() }
    ]
  },
  {
    id: 3,
    name: 'Massas',
    created_at: new Date(),
    updated_at: new Date(),
    products: [
      { id: 5, name: 'Macarrão à Bolonhesa', price: 28, descripiton: 'Molho de carne moída com parmesão', banner: 'teste.png', categoryId: 3, created_at: new Date(), updated_at: new Date() },
      { id: 6, name: 'Lasanha', price: 30, descripiton: 'Lasanha de presunto e queijo ao molho branco', banner: 'teste.png', categoryId: 3, created_at: new Date(), updated_at: new Date() }
    ]
  },
  {
    id: 4,
    name: 'Hambúrgueres',
    created_at: new Date(),
    updated_at: new Date(),
    products: [
      { id: 7, name: 'Cheeseburger', price: 22, descripiton: 'Pão, carne, queijo, alface e tomate', banner: 'teste.png', categoryId: 4, created_at: new Date(), updated_at: new Date() },
      { id: 8, name: 'Duplo Bacon', price: 26, descripiton: '2 carnes, bacon crocante e cheddar', banner: 'teste.png', categoryId: 4, created_at: new Date(), updated_at: new Date() }
    ]
  }
];

  }
}
