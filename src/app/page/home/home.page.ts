import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //crear objeto tipo navCTRLER EN CONSTRUCTOR

  constructor(private navCTRL: NavController) {}

  loginAlumno(){
    this.navCTRL.navigateForward('login-alumno');
  }
  loginConductor(){
    this.navCTRL.navigateForward('login-conductor');
  }

}
