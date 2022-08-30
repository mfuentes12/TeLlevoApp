import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-interfaz-conductor',
  templateUrl: './interfaz-conductor.page.html',
  styleUrls: ['./interfaz-conductor.page.scss'],
})
export class InterfazConductorPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController, private navCTRL: NavController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Desea cerrar sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.navCTRL.navigateForward('home');
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }
}
