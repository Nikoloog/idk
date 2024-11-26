import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  minutes: number = 1;
  seconds: number = 0;
  private duration = 1 * 60 * 1000; // 1 minuto en milisegundos
  private intervalTime = 1000; // Intervalo de 1 segundo para actualizar el contador

  constructor(
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService // Inyecta el servicio de autenticación
  ) {}

  ngOnInit() {
    this.startCountdown(); // Inicia el contador
  }

  // Inicia el conteo regresivo de 1 minuto
  startCountdown() {
    const endTime = Date.now() + this.duration;

    interval(this.intervalTime).pipe(
      takeWhile(() => Date.now() < endTime)
    ).subscribe(() => {
      // Calcula los minutos y segundos restantes
      const timeLeft = endTime - Date.now();
      this.minutes = Math.floor((timeLeft / 1000) / 60);
      this.seconds = Math.floor((timeLeft / 1000) % 60);

      // Cuando el tiempo llega a 0, muestra el diálogo
      if (this.minutes === 0 && this.seconds === 0) {
        this.showAlert();
      }
    });
  }

  // Muestra el alert cuando el tiempo se acaba
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'El tiempo ha terminado',
      message: 'El QR ha terminado. ¿Desea volver a activarlo?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.router.navigate(['/secciones']);  // Redirige a la página "secciones" si se elige "No"
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.startCountdown();  // Reinicia el contador
          }
        }
      ]
    });

    await alert.present();
  }
}