import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoCameraPageRoutingModule } from './acceso-camera-routing.module';

import { AccesoCameraPage } from './acceso-camera.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoCameraPageRoutingModule
  ],
  declarations: [AccesoCameraPage]
})
export class AccesoCameraPageModule {}
