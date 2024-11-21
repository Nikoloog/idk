import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarAsisPage } from './confirmar-asis.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarAsisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarAsisPageRoutingModule {}
