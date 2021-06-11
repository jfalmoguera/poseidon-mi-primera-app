import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador2',
  templateUrl: './contador2.component.html',
  styleUrls: ['./contador2.component.scss']
})
export class Contador2Component implements OnInit {

  resultado = 0;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(event: Event): void {
    console.log(event);
    this.resultado++;
  }

  restar(): void {
    this.resultado ? this.resultado-- : 0;
  }

}
