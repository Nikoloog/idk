import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-registro-codigo',
  templateUrl: './registro-codigo.page.html',
  styleUrls: ['./registro-codigo.page.scss'],
})
export class RegistroCodigoPage implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) {}

  async ngOnInit() {
    this.userName = (await this.authService.getUserName()) ?? ''; // Asigna una cadena vacía si el valor es `null`
  }
}