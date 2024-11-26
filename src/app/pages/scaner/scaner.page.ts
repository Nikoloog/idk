import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scaner',
  templateUrl: './scaner.page.html',
  styleUrls: ['./scaner.page.scss'],
})
export class ScanerPage implements OnInit {

  scanResult: string | null = null;
  isScanning = false;

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Comprobamos permisos al inicializar la aplicación
    if (!this.platform.is('capacitor')) {
      console.error('Este escáner está diseñado para ejecutarse en dispositivos móviles con Capacitor');
      return;
    }
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      console.log('Permisos de cámara concedidos');
    } else {
      console.warn('Permisos de cámara denegados');
    }
  }

  async startScan() {
    // Verificamos permisos antes de iniciar el escaneo
    const status = await BarcodeScanner.checkPermission();
    if (!status.granted) {
      console.error('Permisos de cámara denegados');
      return;
    }

    // Iniciar escaneo de código QR
    this.isScanning = true;
    BarcodeScanner.hideBackground(); // Requerido para una buena visibilidad en dispositivos Android
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      this.scanResult = result.content;
    } else {
      console.warn('No se detectó ningún contenido');
    }
    BarcodeScanner.showBackground();
    this.isScanning = false;
  }

  stopScan() {
    BarcodeScanner.stopScan();
    BarcodeScanner.showBackground();
    this.isScanning = false;
  }
}