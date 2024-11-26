import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesoCameraPage } from './acceso-camera.page';

const routes: Routes = [
  {
    path: '',
    component: AccesoCameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesoCameraPageRoutingModule {}
