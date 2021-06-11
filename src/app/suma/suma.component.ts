import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit, OnChanges {

  @Input() numero1: number = 0;
  @Input() numero2: number = 0;

  result: number = 0;

  constructor() {
    console.log('constructor() - SumaComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit - Suma');
    this.result = this.numero1 + this.numero2;
  }

  // ngAfterViewInit(): void {
  //   this.result = this.numero1 + this.numero2;
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    // if (changes.numero1 && changes.numero2) {
    //   this.result = changes.numero1.currentValue + changes.numero2.currentValue;
    // } else {
    //   if (changes.numero1) {
    //     this.result = changes.numero1.currentValue + this.numero2;
    //   }

    //   if (changes.numero2) {
    //     this.result = changes.numero2.currentValue + this.numero1;
    //   }
    // }

    // this.result = changes.numero1.currentValue + changes.numero2.currentValue;
  }

  // suma(): number {
  //   return this.numero1 + this.numero2;
  // }

}
