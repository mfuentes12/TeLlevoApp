import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfazConductorPage } from './interfaz-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: InterfazConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazConductorPageRoutingModule {}
