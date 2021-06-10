import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss']
})
export class LineaComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() valor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
