import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleComponent } from '../components.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ ExampleComponent ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ExampleComponent]
  
})
export class CompotestModule { }
