import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'registro-codigo',
    loadChildren: () => import('./pages/registro-codigo/registro-codigo.module').then( m => m.RegistroCodigoPageModule)
  },
  {
    path: 'acceso-camera',
    loadChildren: () => import('./pages/acceso-camera/acceso-camera.module').then( m => m.AccesoCameraPageModule)
  },
  {
    path: 'scaner',
    loadChildren: () => import('./pages/scaner/scaner.module').then( m => m.ScanerPageModule)
  },
  {
    path: 'confirmar-asis',
    loadChildren: () => import('./pages/confirmar-asis/confirmar-asis.module').then( m => m.ConfirmarAsisPageModule)
  },
  {
    path: 'nueva-contra',
    loadChildren: () => import('./pages/nueva-contra/nueva-contra.module').then( m => m.NuevaContraPageModule)
  },
  {
    path: 'confirmar-nueva-contra',
    loadChildren: () => import('./pages/confirmar-nueva-contra/confirmar-nueva-contra.module').then( m => m.ConfirmarNuevaContraPageModule)
  },
  {
    path: 'logindocente',
    loadChildren: () => import('./pages/logindocente/logindocente.module').then( m => m.LogindocentePageModule)
  },
  {
    path: 'confirclase',
    loadChildren: () => import('./pages/confirclase/confirclase.module').then( m => m.ConfirclasePageModule)
  },
  {
    path: 'qr',  // Asegúrate de tener la ruta a la página QR configurada
    loadChildren: () => import('./pages/qr/qr.module').then(m => m.QRPageModule)
  },
  {
    path: 'guardarclase',
    loadChildren: () => import('./pages/guardarclase/guardarclase.module').then( m => m.GuardarclasePageModule)
  },
  {
    path: 'mostrarqr',
    loadChildren: () => import('./pages/mostrarqr/mostrarqr.module').then( m => m.MostrarqrPageModule)
  },
  {
    path: 'intro-docente',
    loadChildren: () => import('./pages/intro-docente/intro-docente.module').then( m => m.IntroDocentePageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'geolocalizacion',
    loadChildren: () => import('./pages/geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./pages/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'alerte',
    loadChildren: () => import('./pages/alerte/alerte.module').then( m => m.AlertePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
