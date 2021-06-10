import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo-inline',
  template: `<div>
                <p>Texto en HolaMundoInlineComponent</p>
                <h1>Hola mundo inline </h1>
            </div>`,
  styleUrls: ['./hola-mundo-inline.component.scss']
})
export class HolaMundoInlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
