import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-conductor',
  templateUrl: './login-conductor.page.html',
  styleUrls: ['./login-conductor.page.scss'],
})
export class LoginConductorPage implements OnInit {

  constructor(private navCTRL: NavController) { }

  ngOnInit() {
  }

  restablecer(){
    this.navCTRL.navigateForward('restablecer');
  }

}
