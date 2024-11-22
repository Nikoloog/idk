import { Component, OnInit } from '@angular/core';
import { Html5Qrcode } from 'html5-qrcode';

@Component({
  selector: 'app-acceso-camera',
  templateUrl: './acceso-camera.page.html',
  styleUrls: ['./acceso-camera.page.scss'],
})
export class AccesoCameraPage implements OnInit {

  scanResult: string | null = null;
  isScanning = false;
  html5QrCode: Html5Qrcode | null = null;

  constructor() { }

  ngOnInit() {
    // No se necesita inicializar nada especial para la web
  }

  startScan() {
    this.isScanning = true;
    this.html5QrCode = new Html5Qrcode("reader");
    this.html5QrCode.start(
      { facingMode: "environment" }, // Usa la cámara trasera
      {
        fps: 10, // Frames por segundo
        qrbox: { width: 250, height: 250 } // Tamaño del cuadro de escaneo
      },
      (decodedText, decodedResult) => {
        // Maneja el resultado del escaneo
        this.scanResult = decodedText;
        this.html5QrCode?.stop().then(ignore => {
          // Detiene el escaneo
          this.isScanning = false;
        }).catch(err => {
          console.error('Error al detener el escaneo', err);
        });
      },
      (errorMessage) => {
        // Maneja los errores de escaneo
        console.warn('Error de escaneo', errorMessage);
      }
    ).catch(err => {
      console.error('Error al iniciar el escaneo', err);
      this.isScanning = false;
    });
  }

  stopScan() {
    this.html5QrCode?.stop().then(ignore => {
      // Detiene el escaneo
      this.isScanning = false;
    }).catch(err => {
      console.error('Error al detener el escaneo', err);
    });
  }
}