import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  nombre = 'Juan';
  apellidos = "Sanchez";
  email = 'juan.sanchez@codehouse.com'
  title = 'mi-primera-app';
}
