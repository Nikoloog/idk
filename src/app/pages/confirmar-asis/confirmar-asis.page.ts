import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-confirmar-asis',
  templateUrl: './confirmar-asis.page.html',
  styleUrls: ['./confirmar-asis.page.scss'],
})
export class ConfirmarAsisPage implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.userName = (await this.authService.getUserName()) ?? ''; // Maneja `null` asignando una cadena vacía
  }

  goToIntro() {
    this.router.navigate(['/intro']);
  }
}