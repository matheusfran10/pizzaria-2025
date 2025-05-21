import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  onRegister() {
    console.log('Login tentado com:', this.email, this.senha, this.nome);
  }
}
