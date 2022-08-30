import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./page/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule)
  },
  {
    path: 'login-conductor',
    loadChildren: () => import('./page/login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: 'registro-conductor',
    loadChildren: () => import('./page/registro-conductor/registro-conductor.module').then( m => m.RegistroConductorPageModule)
  },
  {
    path: 'interfaz-usuario',
    loadChildren: () => import('./page/interfaz-usuario/interfaz-usuario.module').then( m => m.InterfazUsuarioPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./page/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'listar-conductor',
    loadChildren: () => import('./page/listar-conductor/listar-conductor.module').then( m => m.ListarConductorPageModule)
  },
  {
    path: 'rutas',
    loadChildren: () => import('./page/rutas/rutas.module').then( m => m.RutasPageModule)
  },
  {
    path: 'interfaz-conductor',
    loadChildren: () => import('./page/interfaz-conductor/interfaz-conductor.module').then( m => m.InterfazConductorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
