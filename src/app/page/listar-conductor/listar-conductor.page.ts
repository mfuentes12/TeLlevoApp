import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-conductor',
  templateUrl: './listar-conductor.page.html',
  styleUrls: ['./listar-conductor.page.scss'],
})
export class ListarConductorPage implements OnInit {

  constructor() { }

  lista_cond = new Array();
  ngOnInit() {
    this.listar();
  }

  listar() {
    var arreglo_temp = new Array();
    var datos = localStorage.getItem("datos");
    datos = datos.replace('[', '');
    datos = datos.replace(']', '');
    datos = datos.split("},{").join("};{");
    arreglo_temp = datos.split(";");

    for (let index = 0; index < arreglo_temp.length; index++) {
      var reg = JSON.parse(arreglo_temp[index]);
      var cnd = {
        nombreC: reg.nombreC,
        patenteA: reg.patenteA,
        modeloA: reg.modeloA,
        marcaA: reg.marcaA,
        capacidadA: reg.capacidadA
      };
      this.lista_cond.push(cnd);
    }
    console.log(this.lista_cond);
  }
}
