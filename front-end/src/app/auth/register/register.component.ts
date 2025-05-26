import { Component } from '@angular/core';
import { User } from 'src/app/services/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
user: User = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    password: '',
    photo: '',
    address: {
      street: '',
      number: '',
      city: '',
      state: '',
      Cep: ''
    },
    created_at: new Date(),
    updated_at: new Date()
  };

  constructor(private userService: UserService) {}

  onRegister() {
    this.userService.create(this.user).subscribe({
      next: (res) => {
        console.log('Usuário cadastrado com sucesso:', res);
        // redirecionar para login ou página inicial
      },
      error: (err) => {
        console.error('Erro ao registrar:', err);
      }
    });
  }
}
