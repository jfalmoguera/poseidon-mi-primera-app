import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit, OnChanges {

  @Input() contador: number = 0;
  valorInicial: number = 0;

  contadorRef: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contador.currentValue) {
      this.valorInicial = changes.contador.currentValue;
      this.startCounter();
    }
  }

  reniciar(): void {

    if (this.contadorRef) {
      clearInterval(this.contadorRef)
    }

    this.contador = this.valorInicial;
    this.startCounter();
  }

  private startCounter(): void {
    if (this.contador) {
      this.contadorRef = setInterval(() => {
          this.contador--;
          if (this.contador === 0 && this.contadorRef) {
            clearInterval(this.contadorRef);
          }
     
      }, 1000);
    }
  }

}
