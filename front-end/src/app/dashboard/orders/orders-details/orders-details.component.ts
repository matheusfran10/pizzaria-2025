import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/services/models/order';
import { OrderItems } from 'src/app/services/models/order-items';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  
})
export class OrdersDetailsComponent {
  orderId!: number;
  items: OrderItems[] = [];
  order!: Order;

  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

  const navigation = window.history.state;
  if (navigation && navigation.order) {
    this.order = navigation.order;
  } else {
    
    this.order = this.orderService.getOrderById(this.orderId)!;
  }

  this.orderService.getOrderItems(this.orderId).subscribe(data => {
    this.items = data;
  });
  }

  goBack() {
  this.router.navigate(['/dashboard/pedidos']);
}

finalizeOrder() {
  // Aqui você pode fazer chamada pro backend depois
  alert('Pedido finalizado!');
  // Atualizar status, salvar no banco etc.
}

cancelOrder() {
  // Aqui você pode fazer chamada pro backend depois
  alert('Pedido cancelado!');
  // Atualizar status, salvar no banco etc.
}
}
