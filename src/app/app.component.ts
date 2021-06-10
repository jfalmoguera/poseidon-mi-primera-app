import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  nombre = 'Juan';
  apellidos = "Sanchez";
  email = 'juan.sanchez@codehouse.com'
  title = 'mi-primera-app';

  constructor() {
    console.log('constructor() - AppComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit() - AppComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() - AppComponent');
 }
}
