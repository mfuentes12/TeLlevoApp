import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-conductor',
  templateUrl: './registro-conductor.page.html',
  styleUrls: ['./registro-conductor.page.scss'],
})
export class RegistroConductorPage implements OnInit {

  constructor(private alertController: AlertController) { }

  nombreCond: String;
  pass: String;
  patenteA: String;
  marcaA: String;
  modeloA: String;
  colorA: String;
  anioA: Number;
  capacidadA: Number;

  lista_cond = new Array();

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Registro completado con exito!',
      subHeader: 'Por favor, inicie sesión con sus credenciales.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  registrarC() {

    var conductor = {
      nombreC: this.nombreCond,
      pass: this.pass,
      patenteA: this.patenteA,
      marcaA: this.marcaA,
      modeloA: this.modeloA,
      colorA: this.colorA,
      anioA: this.anioA,
      capacidadA: this.capacidadA
    };
    this.lista_cond.push(conductor)
    console.log(conductor);
    localStorage.setItem("datos", JSON.stringify(this.lista_cond));
  }
}
