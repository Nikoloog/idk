import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.userName = (await this.authService.getUserName()) ?? ''; // Maneja `null` asignando una cadena vacía
  }

  goToregistrocodigo() {
    this.router.navigate(['/registro-codigo']);
  }
}


