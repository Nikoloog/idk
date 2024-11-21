import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router para la navegación

@Component({
  selector: 'app-mostrarqr',
  templateUrl: './mostrarqr.page.html',
  styleUrls: ['./mostrarqr.page.scss'],
})
export class MostrarqrPage implements OnInit {

  numerosAleatorios: number[] = [];
  progreso: number = 0;
  tiempoRestante: string = '01:00';
  duracion: number = 60; // Duración en segundos

  constructor(private router: Router) { } // Inyecta el Router

  ngOnInit() {
    this.generarNumerosAleatorios();
    this.iniciarTemporizador();
  }

  generarNumerosAleatorios() {
    this.numerosAleatorios = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
  }

  iniciarTemporizador() {
    const interval = setInterval(() => {
      this.duracion--;

      // Actualiza el progreso
      this.progreso = (60 - this.duracion) / 60;

      // Calcula minutos y segundos
      const minutos = Math.floor(this.duracion / 60);
      const segundos = this.duracion % 60;

      // Formatea el tiempo como mm:ss
      this.tiempoRestante = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

      // Redirige cuando el tiempo se agote
      if (this.duracion <= 0) {
        clearInterval(interval);
        this.router.navigate(['/qr']); // Navega a la página del QR
      }
    }, 1000);
  }
}

