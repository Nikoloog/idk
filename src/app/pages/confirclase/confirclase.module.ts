import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirclasePageRoutingModule } from './confirclase-routing.module';

import { ConfirclasePage } from './confirclase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirclasePageRoutingModule
  ],
  declarations: [ConfirclasePage]
})
export class ConfirclasePageModule {}
