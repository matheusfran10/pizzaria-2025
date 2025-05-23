import { Component } from '@angular/core';
import { Category } from 'src/app/services/models/category';
import { Product } from 'src/app/services/models/product';

@Component({
  selector: 'app-list-product-by-category',
  templateUrl: './list-product-by-category.component.html',
  styleUrls: ['./list-product-by-category.component.scss']
})
export class ListProductByCategoryComponent {
selectedCategoryId: number | null = null;

categories = [
    { id: '1', name: 'Pizzas'},
    { id: '2', name: 'Bebidas',  },
    { id: '3', name: 'Sobremesas',},
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Coca-Cola',
      price: 7.5,
      descripiton: 'Refrigerante gelado',
      banner: 'coca.jpg',
      categoryId: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'Pizza Calabresa',
      price: 25,
      descripiton: 'Pizza com calabresa e cebola',
      banner: 'pizza.jpg',
      categoryId: 2,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: 'Sorvete de Chocolate',
      price: 10,
      descripiton: 'Delicioso sorvete cremoso',
      banner: 'sorvete.jpg',
      categoryId: 3,
      created_at: new Date(),
      updated_at: new Date(),
    }
  ];

  get filteredProducts(): Product[] {
    if (!this.selectedCategoryId) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }
}
