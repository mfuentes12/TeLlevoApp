import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  constructor(private navCTRL: NavController, private alertController: AlertController) { }

  nombreUser: String;

  lista_user = new Array();

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Bienvenido!',
      subHeader: '¡Bienvenido manu.fuentes !',
      buttons: ['OK'],
    });

    await alert.present();
  }
  restablecer() {
    this.navCTRL.navigateForward('restablecer');
  }
}
