import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private altCtrl: AlertController) { }

  async presentAlert() {
    const alert = await this.altCtrl.create({
      header: 'Recuperación de contraseña',
      message: 'Se ha enviado un código de verificación a su correo institucional, siga los pasos que se le indican en este.',
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
