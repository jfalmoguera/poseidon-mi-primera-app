import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador3',
  templateUrl: './contador3.component.html',
  styleUrls: ['./contador3.component.scss']
})
export class Contador3Component implements OnInit {

  contador = 5;
  backContador = 5;
  contadorRef: any;

  constructor() { }

  ngOnInit(): void {
    this.contar();
  }

  contar() {
    // if (this.contador) {
    //   this.contadorRef = setTimeout(() => {
    //     this.contador--;
    //     if (this.contador) {
    //       this.contar();
    //     }
    //   }, 1000);
    // }

    for (let index = 1; index <= 5; index++) {

      setTimeout(() => {
        this.contador--;
      }, index * 1000);
    }


  }

  reset() {
    if (this.contadorRef) {
      clearTimeout(this.contadorRef);
    }

    this.contador = this.backContador;

    this.contar();
  }

}
