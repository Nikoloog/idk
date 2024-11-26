import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HpApiService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters/students';

  async getAlumnos() {
    try {
      const response = await axios.get(this.apiUrl);
      const alumnos = response.data.slice(0, 11);

      // Agregar estado de asistencia fija
      return alumnos.map((alumno: any, index: number) => ({
        ...alumno,
        presente: index % 2 === 0  // Alterna entre presente y ausente
      }));
    } catch (error) {
      console.error('Error al obtener los alumnos:', error);
      return [];
    }
  }
}
