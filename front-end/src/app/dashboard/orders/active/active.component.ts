import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/services/models/order';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
 orders: Order[] = [];
  
  ngOnInit(): void {
    // Mock de pedidos - status 1 = pending
    this.orders = [
      {
        id: 101,
        tableId: 12,
        userId: 1,
        status: 1,
        draft: false,
        isActive: true,
        name: 'Pedido A',
        created_at: new Date('2025-05-20T10:30:00'),
        updated_at: new Date('2025-05-20T10:30:00')
      },
      {
        id: 102,
        tableId: 5,
        userId: 2,
        status: 2, // status diferente de pending
        draft: false,
        isActive: false,
        name: 'Pedido B',
        created_at: new Date('2025-05-20T11:00:00'),
        updated_at: new Date('2025-05-20T11:00:00')
      },
      {
        id: 103,
        tableId: 3,
        userId: 1,
        status: 1,
        draft: false,
        isActive: true,
        name: 'Pedido C',
        created_at: new Date('2025-05-21T09:00:00'),
        updated_at: new Date('2025-05-21T09:00:00')
      }
    ];

    // Filtra só os pedidos com status pending (status == 1)
    this.orders = this.orders.filter(order => order.status === 1);
  }

  finalizeOrder(order: Order) {
    console.log('Finalizar pedido', order);
    // aqui você pode chamar seu serviço para finalizar
  }

  cancelOrder(order: Order) {
    console.log('Cancelar pedido', order);
    // aqui você pode chamar seu serviço para cancelar
  }

  editItems(order: Order) {
    console.log('Editar itens do pedido', order);
    // navegue ou abra modal para editar itens
  }

  viewDetails(order: Order) {
    console.log('Ver detalhes do pedido', order);
    
  }
}
