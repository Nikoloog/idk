import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardarclasePageRoutingModule } from './guardarclase-routing.module';

import { GuardarclasePage } from './guardarclase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardarclasePageRoutingModule
  ],
  declarations: [GuardarclasePage]
})
export class GuardarclasePageModule {}
