import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-interfaz-usuario',
  templateUrl: './interfaz-usuario.page.html',
  styleUrls: ['./interfaz-usuario.page.scss'],
})
export class InterfazUsuarioPage implements OnInit {

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

  listarConductor(){
    this.navCTRL.navigateForward('listar-conductor');

  }




}
