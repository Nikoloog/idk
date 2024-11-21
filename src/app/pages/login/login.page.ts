import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  userName: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.login(this.userName, this.password);
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/intro']);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Usuario o contraseña incorrectos');
    }
  }

  loginDocente() {
    if (this.authService.loginDocente(this.userName, this.password)) {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/logindocente']); // Redirige a la página de logindocente
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}