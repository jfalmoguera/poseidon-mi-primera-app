import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  nombre = 'Juan';
  apellidos = "Sanchez";
  email = 'juan.sanchez@codehouse.com'
  title = 'mi-primera-app';

  numero1: number = 55;
  numero2: number = 22;

  contador:number = 25;

  constructor() {
    console.log('constructor() - AppComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit() - AppComponent');

    setTimeout(() => {
      this.numero1 = 20
    }, 2000);

    setTimeout(() => {
      this.numero2 = 50
    }, 4000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() - AppComponent');
 }
}
