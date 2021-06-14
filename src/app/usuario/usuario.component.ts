import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  @Input() usuario: Usuario | null = null

  @Output() info = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  infoClick(): void {
    if (this.usuario) {
      console.log(`${this.usuario.nombre} ${this.usuario.apellidos}`);
      this.info.emit(`${this.usuario.nombre} ${this.usuario.apellidos}`);
    }
  }
}
