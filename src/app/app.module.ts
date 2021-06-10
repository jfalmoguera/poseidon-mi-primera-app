import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HolaMundoInlineComponent } from './hola-mundo-inline/hola-mundo-inline.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { LineaComponent } from './linea/linea.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    HolaMundoInlineComponent,
    UsuarioComponent,
    UsuariosListComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
