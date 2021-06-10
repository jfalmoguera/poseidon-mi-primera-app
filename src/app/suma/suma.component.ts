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

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit() - SumaComponent');
  }

  suma(): number {
    return this.numero1 + this.numero2;
  }

}
