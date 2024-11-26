import { Component, OnInit } from '@angular/core';
import { HpApiService } from '../servicio/hp-api.service';

interface Alumno {
  name: string;
  image: string;
  presente: boolean;
}

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  alumnos: Alumno[] = [];

  constructor(private hpApiService: HpApiService) {}

  async ngOnInit() {
    this.alumnos = await this.hpApiService.getAlumnos();
  }
}
