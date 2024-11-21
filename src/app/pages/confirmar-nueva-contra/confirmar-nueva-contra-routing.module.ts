import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarNuevaContraPage } from './confirmar-nueva-contra.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarNuevaContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarNuevaContraPageRoutingModule {}
