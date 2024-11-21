import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UbicacionPageRoutingModule } from './ubicacion-routing.module';
import { UbicacionPage } from './ubicacion.page';
import { HttpClientModule } from '@angular/common/http'; // Importa el módulo HttpClientModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPageRoutingModule,
    HttpClientModule  // Asegúrate de incluirlo aquí
  ],
  declarations: [UbicacionPage]
})
export class UbicacionPageModule {}
