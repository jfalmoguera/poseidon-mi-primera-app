import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() nombre: string = 'Jose';
  @Input() apellidos: string = 'Almoguera';
  @Input() email: string = 'jalmoguera@bravent.net';

  constructor() {
    this.nombre = 'Andres';
    this.apellidos = 'Almoguera';
    this.email = 'jalmoguera@bravent.net';
  }

  ngOnInit(): void {
  }

}
