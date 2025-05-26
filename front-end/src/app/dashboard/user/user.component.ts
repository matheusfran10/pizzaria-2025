import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 users: User[] = [];

  ngOnInit() {
    this.users = [
      {
        id: 1,
        name: 'Ana Costa',
        email: 'ana.costa@email.com',
        phone: '(11) 91234-5678',
        password: '123456',
        photo: '',
        address: {
          street: 'Rua das Flores',
          number: '123',
          city: 'São Paulo',
          state: 'SP',
          Cep: '01001-000',
        },
        created_at: new Date('2024-01-10'),
        updated_at: new Date('2024-05-10'),
      },
      {
        id: 2,
        name: 'Carlos Silva',
        email: 'carlos.silva@email.com',
        phone: '(21) 98765-4321',
        password: 'abcdef',
        photo: '',
        address: {
          street: 'Av. Brasil',
          number: '456',
          city: 'Rio de Janeiro',
          state: 'RJ',
          Cep: '20000-000',
        },
        created_at: new Date('2024-02-15'),
        updated_at: new Date('2024-05-11'),
      },
    ];
  }
}