import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarAsisPageRoutingModule } from './confirmar-asis-routing.module';

import { ConfirmarAsisPage } from './confirmar-asis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarAsisPageRoutingModule
  ],
  declarations: [ConfirmarAsisPage]
})
export class ConfirmarAsisPageModule {}
