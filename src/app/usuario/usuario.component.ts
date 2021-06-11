import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() nombre: string = 'Jose';
  @Input() apellidos: string = 'Almoguera';
  @Input() email: string = 'jalmoguera@bravent.net';

  @Output() info = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  infoClick(): void {
    console.log(`${this.nombre} ${this.apellidos}`);
    this.info.emit(`${this.nombre} ${this.apellidos}`);
  }
}
