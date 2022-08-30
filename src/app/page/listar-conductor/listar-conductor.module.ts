import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarConductorPageRoutingModule } from './listar-conductor-routing.module';

import { ListarConductorPage } from './listar-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarConductorPageRoutingModule
  ],
  declarations: [ListarConductorPage]
})
export class ListarConductorPageModule {}
