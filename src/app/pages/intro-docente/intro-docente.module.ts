import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroDocentePageRoutingModule } from './intro-docente-routing.module';

import { IntroDocentePage } from './intro-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroDocentePageRoutingModule
  ],
  declarations: [IntroDocentePage]
})
export class IntroDocentePageModule {}
