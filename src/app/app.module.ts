import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HolaMundoInlineComponent } from './hola-mundo-inline/hola-mundo-inline.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { LineaComponent } from './linea/linea.component';
import { SumaComponent } from './suma/suma.component';
import { ContadorComponent } from './contador/contador.component';
import { Contador2Component } from './contador2/contador2.component';
import { Contador3Component } from './contador3/contador3.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    HolaMundoInlineComponent,
    UsuarioComponent,
    UsuariosListComponent,
    LineaComponent,
    SumaComponent,
    ContadorComponent,
    Contador2Component,
    Contador3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
