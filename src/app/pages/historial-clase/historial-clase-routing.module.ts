import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialClasePage } from './historial-clase.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialClasePageRoutingModule {}
