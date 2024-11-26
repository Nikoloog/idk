import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarqrPageRoutingModule } from './mostrarqr-routing.module';

import { MostrarqrPage } from './mostrarqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarqrPageRoutingModule
  ],
  declarations: [MostrarqrPage]
})
export class MostrarqrPageModule {}
