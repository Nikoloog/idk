import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage implements OnInit {
  asignatura: any;
  estudiante: string = '';
  location: { lat: number, lng: number } | null = null;
  mapUrl: SafeResourceUrl = '';

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    const navigation = this.router.getCurrentNavigation();
    this.asignatura = navigation?.extras.state?.['asignatura'];
    this.estudiante = navigation?.extras.state?.['estudiante'] || 'N/A';
  }

  ngOnInit() {
    if (!this.asignatura) {
      // Manejar el caso en que no haya datos de asignatura
      this.router.navigate(['/intro']);
    } else {
      this.getLocation();
    }
  }

  async getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log('Ubicación obtenida:', this.location);
          this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${this.location.lat},${this.location.lng}&z=15&output=embed`);
        },
        (error) => {
          console.error('Error al obtener la ubicación', error);
          this.location = null;
        }
      );
    } else {
      console.error('Geolocalización no soportada por el navegador');
      this.location = null;
    }
  }

  navigateToScan() {
    this.router.navigate(['/acceso-camera'], { state: { asignatura: this.asignatura, estudiante: this.estudiante, location: this.location } });
  }
}