import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/services/models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
orders: Order[] = [];

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
  this.orders = [
    {
      id: 1,
      tableId: 10,
      userId: 5,
      status: 0,
      draft: true,
      name: 'Mesa 10',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 2,
      tableId: 12,
      userId: 3,
      status: 0,
      draft: true,
      name: 'Mesa 12',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 3,
      tableId: 5,
      userId: 2,
      status: 0,
      draft: true,
      name: 'Mesa 5',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 4,
      tableId: 8,
      userId: 4,
      status: 0,
      draft: true,
      name: 'Mesa 8',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 5,
      tableId: 20,
      userId: 1,
      status: 0,
      draft: true,
      name: 'Mesa 20',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 6,
      tableId: 18,
      userId: 6,
      status: 0,
      draft: true,
      name: 'Mesa 18',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 7,
      tableId: 3,
      userId: 2,
      status: 0,
      draft: true,
      name: 'Mesa 3',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 8,
      tableId: 15,
      userId: 7,
      status: 0,
      draft: true,
      name: 'Mesa 15',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 9,
      tableId: 25,
      userId: 8,
      status: 0,
      draft: true,
      name: 'Mesa 25',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    },
    {
      id: 10,
      tableId: 7,
      userId: 9,
      status: 0,
      draft: true,
      name: 'Mesa 7',
      created_at: new Date(),
      updated_at: new Date(),
      isActive: false
    }
  ];
}

  goToDetails(order: Order) {
    this.orders.forEach(o => o.isActive = false);
    order.isActive = true;
    this.router.navigate(['dashboard/pedidos/', order.id], { state: { order } });
  }

  goToNewOrder() {
    this.router.navigate(['/order/new']);
  }
}
