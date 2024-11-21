import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuardarclasePage } from './guardarclase.page';

const routes: Routes = [
  {
    path: '',
    component: GuardarclasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardarclasePageRoutingModule {}
