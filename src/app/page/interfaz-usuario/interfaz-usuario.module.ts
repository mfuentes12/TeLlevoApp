import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazUsuarioPageRoutingModule } from './interfaz-usuario-routing.module';

import { InterfazUsuarioPage } from './interfaz-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazUsuarioPageRoutingModule
  ],
  declarations: [InterfazUsuarioPage]
})
export class InterfazUsuarioPageModule {}
