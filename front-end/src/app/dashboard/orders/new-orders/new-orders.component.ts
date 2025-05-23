import { Component } from '@angular/core';
import { Category } from 'src/app/services/models/category';
import { Product } from 'src/app/services/models/product';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.scss']
})
export class NewOrdersComponent {
categories: Category[] = []; // Isso você pode buscar via serviço futuramente
  selectedCategory: Category | null = null;
  orderItems: Product[] = [];

  ngOnInit(): void {
    // Exemplo de dados mockados
    this.categories = [
      {
        id: 1,
        name: 'Pizza',
        created_at: new Date(),
        updated_at: new Date(),
        products: [
          {
            id: 1,
            name: 'Calabresa',
            price: 35,
            descripiton: 'Deliciosa pizza de calabresa',
            banner: 'teste.png',
            categoryId: 1,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            id: 2,
            name: 'Frango com Catupiry',
            price: 40,
            descripiton: 'Frango desfiado com catupiry cremoso',
            banner: 'teste.png',
            categoryId: 1,
            created_at: new Date(),
            updated_at: new Date()
          }
        ]
      },
      {
        id: 2,
        name: 'Bebida',
        created_at: new Date(),
        updated_at: new Date(),
        products: [
          {
            id: 3,
            name: 'Coca-Cola',
            price: 6,
            descripiton: 'Lata 350ml',
            banner: 'teste.png',
            categoryId: 2,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            id: 4,
            name: 'Cerveja',
            price: 7,
            descripiton: 'Long neck 355ml',
            banner: 'teste.png',
            categoryId: 2,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            id: 5,
            name: 'Água',
            price: 5,
            descripiton: '600ml',
            banner: 'teste.png',
            categoryId: 2,
            created_at: new Date(),
            updated_at: new Date()
          }
        ]
      }
    ];
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  addToOrder(product: Product) {
    this.orderItems.push(product);
  }

  removeFromOrder(index: number) {
    this.orderItems.splice(index, 1);
  }

  submitOrder() {
    if (this.orderItems.length === 0) {
      alert('Selecione pelo menos um item para o pedido!');
      return;
    }

    // Aqui você pode chamar um serviço para enviar os dados ao backend
    console.log('Pedido finalizado:', this.orderItems);
    alert('Pedido enviado com sucesso!');

    this.orderItems = [];
    this.selectedCategory = null;
  }

  get totalPrice(): string {
  const total = this.orderItems.reduce((acc, p) => acc + p.price, 0);
  return total.toFixed(2);
}

}
