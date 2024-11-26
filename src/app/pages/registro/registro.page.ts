import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  userName: string = '';
  password: string = '';
  telefono: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.authService.register(this.userName, this.password, this.nombre, this.apellido, this.telefono);
      alert('Registro exitoso');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Error en el registro');
    }
  }
}