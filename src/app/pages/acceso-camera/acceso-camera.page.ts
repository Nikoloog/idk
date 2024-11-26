import { Component, OnInit } from '@angular/core';
import { Html5Qrcode } from 'html5-qrcode';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-camera',
  templateUrl: './acceso-camera.page.html',
  styleUrls: ['./acceso-camera.page.scss'],
})
export class AccesoCameraPage implements OnInit {

  scanResult: any = null;
  isScanning = false;
  html5QrCode: Html5Qrcode | null = null;
  asignatura: any;
  estudiante: string = '';
  location: { lat: number, lng: number } | null = null;

  constructor(private firestore: AngularFirestore, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.asignatura = navigation?.extras.state?.['asignatura'];
    this.estudiante = navigation?.extras.state?.['estudiante'] || 'N/A';
    this.location = navigation?.extras.state?.['location'] || null;
  }

  ngOnInit() {
    if (!this.asignatura) {
      // Manejar el caso en que no haya datos de asignatura
      this.router.navigate(['/intro']);
    }
  }

  startScan() {
    this.isScanning = true;
    this.html5QrCode = new Html5Qrcode("reader");
    this.html5QrCode.start(
      { facingMode: "environment" }, // Usa la cámara trasera
      {
        fps: 10, // Frames por segundo
        qrbox: { width: 450, height: 450 } // Tamaño del cuadro de escaneo
      },
      (decodedText, decodedResult) => {
        // Maneja el resultado del escaneo
        this.scanResult = this.parseScanResult(decodedText);
        this.saveScanResult(this.scanResult);
        this.actualizarProgresoAsignatura(this.asignatura['nombre'], 10); // Incrementar el progreso en un 10%
        this.guardarAsistencia(this.scanResult);
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

  parseScanResult(decodedText: string): any {
    // Aquí puedes parsear el texto decodificado para extraer la información necesaria
    // Por ejemplo, si el QR contiene un texto separado por comas
    const parts = decodedText.split(',');
    return {
      asignatura: this.asignatura['nombre'],
      profesor: this.asignatura['profesor'],
      estudiante: this.estudiante,
      seccion: this.asignatura['seccion']
    };
  }

  saveScanResult(scanResult: any) {
    this.firestore.collection('scanResults').add(scanResult)
      .then(() => {
        console.log('Resultado del escaneo guardado en Firestore');
      })
      .catch((error: any) => {
        console.error('Error al guardar el resultado del escaneo en Firestore', error);
      });
  }

  actualizarProgresoAsignatura(nombreAsignatura: string, incremento: number) {
    const cursoRef = this.firestore.collection('cursos').doc(nombreAsignatura);
    cursoRef.get().subscribe(doc => {
      if (doc.exists) {
        const curso = doc.data() as any;
        const nuevoProgreso = Math.min((curso.progreso || 0) + incremento, 100);
        cursoRef.update({ progreso: nuevoProgreso });
      } else {
        cursoRef.set({ nombre: nombreAsignatura, progreso: incremento });
      }
    });
  }

  guardarAsistencia(scanResult: any) {
    this.firestore.collection('asistencia').add({
      asignatura: scanResult.asignatura,
      estudiante: scanResult.estudiante,
      presente: true
    }).then(() => {
      console.log('Asistencia guardada en Firestore');
    }).catch((error: any) => {
      console.error('Error al guardar la asistencia en Firestore', error);
    });
  }
}