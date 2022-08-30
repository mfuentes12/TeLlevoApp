import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazConductorPageRoutingModule } from './interfaz-conductor-routing.module';

import { InterfazConductorPage } from './interfaz-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazConductorPageRoutingModule
  ],
  declarations: [InterfazConductorPage]
})
export class InterfazConductorPageModule {}
