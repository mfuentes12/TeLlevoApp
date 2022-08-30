import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  constructor(private navCTRL: NavController) { }

  ngOnInit() {
  }

  volver(){
    this.navCTRL.navigateForward('listar-conductor');
  }
}
