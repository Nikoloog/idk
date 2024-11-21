import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';  // Importamos Leaflet

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage {
  latitud: number = 0;
  longitud: number = 0;
  direccion: string = '';
  apiKey: string = 'TU_API_KEY_DE_GOOGLE'; // Reemplaza con tu API Key de Google Maps
  map: any;  // Aquí almacenaremos la instancia del mapa

  constructor(private http: HttpClient) { }

  async obtenerUbicacion() {
    try {
      const posicion = await Geolocation.getCurrentPosition();
      this.latitud = posicion.coords.latitude;
      this.longitud = posicion.coords.longitude;

      console.log('Ubicación obtenida:', this.latitud, this.longitud);

      // Llamar a la función para obtener la dirección
      this.obtenerDireccion();

      // Llamar a la función para renderizar el mapa
      this.mostrarMapa();
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
      alert('No se pudo obtener tu ubicación. Asegúrate de habilitar los permisos de ubicación.');
    }
  }

  // Función para obtener la dirección usando la API de Google Maps
  obtenerDireccion() {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latitud},${this.longitud}&key=${this.apiKey}`;

    this.http.get(url).subscribe((response: any) => {
      if (response.status === 'OK' && response.results.length > 0) {
        this.direccion = response.results[0].formatted_address;
      } else {
        this.direccion = 'Dirección no disponible';
      }
    }, error => {
      console.error('Error en geocodificación', error);
      this.direccion = 'No se pudo obtener la dirección';
    });
  }

  // Función para inicializar el mapa con la ubicación
  mostrarMapa() {
    // Verifica si el mapa ya está inicializado
    if (this.map) {
      this.map.remove();
    }

    // Creamos una nueva instancia de mapa en el contenedor "map"
    this.map = L.map('map').setView([this.latitud, this.longitud], 13); // Establece la vista inicial del mapa

    // Añadimos una capa de mapa (OpenStreetMap en este caso)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    // Creamos un marcador para la ubicación
    L.marker([this.latitud, this.longitud]).addTo(this.map)
      .bindPopup('Tu ubicación actual')
      .openPopup();
  }

  ngOnInit() {
    // Llamar a la función para obtener la ubicación cuando se carga el componente
    this.obtenerUbicacion();
  }
}
