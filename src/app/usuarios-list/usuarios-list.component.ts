import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  usuarios: any[];
  nombreUsuarioSeleccionado = '';

  constructor() {
    this.usuarios = [
      {
        nombre: 'jose',
        apellidos: 'perez',
        email: 'jose.perez@ch.es'
      },
      {
        nombre: 'Ana',
        apellidos: 'Lopez',
        email: 'ana.lopez@ch.es'
      },
      {
        nombre: 'Ines',
        apellidos: 'Hernandez',
        email: 'ines.hernandez@ch.es'
      }]
  }

  ngOnInit(): void {
  }

  mostrarInfo(nombre: string) {
    console.log('mostrarInfo');
    this.nombreUsuarioSeleccionado = nombre;
  }

}
