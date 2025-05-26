import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/services/models/order';
import { OrderItems } from 'src/app/services/models/order-items';
import { Product } from 'src/app/services/models/product';
import { ProductService } from 'src/app/services/produtc.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})
export class OrderItemsComponent implements OnInit {
@Input() order!: Order;

  items: OrderItems[] = [];

  products: Product[] = [];

  selectedProductId: number | null = null;
  newAmount = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
    // Aqui carregaria os itens do pedido via serviço também
    this.items = [];
  }

  loadProducts() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  addItem() {
    if (!this.selectedProductId || this.newAmount < 1) {
      alert('Selecione um produto e informe uma quantidade válida.');
      return;
    }

    const newItem: OrderItems = {
      id: 0,  // id será definido pelo backend ao salvar
      orderId: this.order.id,
      productId: this.selectedProductId,
      amount: this.newAmount,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.items.push(newItem);

    // Resetar seleção
    this.selectedProductId = null;
    this.newAmount = 1;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  saveItems() {
    console.log('Salvar itens no pedido', this.order.id, this.items);
    // Chamar serviço para salvar no backend
  }

  getProductName(productId: number): string {
    const product = this.products.find(p => p.id === productId);
    return product ? product.name : 'Produto desconhecido';
  }
}
