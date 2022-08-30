import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarConductorPage } from './listar-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ListarConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarConductorPageRoutingModule {}
