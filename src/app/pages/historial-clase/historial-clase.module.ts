import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialClasePageRoutingModule } from './historial-clase-routing.module';

import { HistorialClasePage } from './historial-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialClasePageRoutingModule
  ],
  declarations: [HistorialClasePage]
})
export class HistorialClasePageModule {}
