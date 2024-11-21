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

  qrCodeData: string = '';
  minutes: number = 1;
  seconds: number = 0;
  private duration = 1 * 60 * 1000; // 2 minutos en milisegundos
  private intervalTime = 1000; // Intervalo de 1 segundo para actualizar el contador

  constructor(
    private alertController: AlertController,
    private router: Router,
    private authService: AuthService // Inyecta el servicio de autenticación
  ) {}

  ngOnInit() {
    this.generateQRCode(); // Genera el primer QR al iniciar la página
    this.startCountdown(); // Inicia el contador
  }

  // Genera un código QR con el correo del usuario autenticado
  async generateQRCode() {
    const email = await this.authService.getUserEmail();
    if (email) {
      this.qrCodeData = `El alumno de correo ${email} ha quedado presente`;
      setTimeout(() => {
        this.router.navigate(['/confirmar-asis']);
      }, 4000);
    } else {
      this.qrCodeData = 'Error: No se pudo obtener el correo del usuario';
    }
  }

  // Inicia el conteo regresivo de 2 minutos
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
            this.generateQRCode();  // Genera un nuevo QR
            this.startCountdown();  // Reinicia el contador
          }
        }
      ]
    });

    await alert.present();
  }
}