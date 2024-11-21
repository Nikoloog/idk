import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-logindocente',
  templateUrl: './logindocente.page.html',
  styleUrls: ['./logindocente.page.scss'],
})
export class LogindocentePage {
  userName: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  loginDocente() {
    if (this.authService.loginDocente(this.userName, this.password)) {
      alert('Login docente exitoso');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}