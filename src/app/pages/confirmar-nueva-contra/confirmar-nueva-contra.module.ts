import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarNuevaContraPageRoutingModule } from './confirmar-nueva-contra-routing.module';

import { ConfirmarNuevaContraPage } from './confirmar-nueva-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarNuevaContraPageRoutingModule
  ],
  declarations: [ConfirmarNuevaContraPage]
})
export class ConfirmarNuevaContraPageModule {}
