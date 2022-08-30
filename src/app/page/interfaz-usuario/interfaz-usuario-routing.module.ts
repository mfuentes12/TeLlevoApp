import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfazUsuarioPage } from './interfaz-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: InterfazUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazUsuarioPageRoutingModule {}
