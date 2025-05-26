import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/services/models/order';
import { User } from 'src/app/services/models/user';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
 user!: User;
  orders: Order[] = [];
  isEditing = false;

  ngOnInit(): void {
    // Mock de usuário para teste
    const mockUser: User = {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@email.com',
      phone: '(11) 91234-5678',
      password: '123456',
      photo: '', // pode colocar uma url aqui se quiser
      address: {
        street: 'Rua das Acácias',
        number: '123',
        city: 'São Paulo',
        state: 'SP',
        Cep: '01001-000',
      },
      created_at: new Date('2024-01-01'),
      updated_at: new Date('2024-05-01'),
    };

    const mockOrders: Order[] = [
     
    ];

    of(mockUser).subscribe((res) => (this.user = res));
    this.orders = mockOrders;
  }

  enableEdit() {
    this.isEditing = true;
  }

  save() {
    // Aqui você pode chamar o serviço para salvar, por enquanto só fecha o modo edição
    this.isEditing = false;
  }
}