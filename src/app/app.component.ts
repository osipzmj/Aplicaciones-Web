import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer aplicación con angular';

  curso: string="Spring 5 con angular 12";
  profesor: string ="Daniel Sustaita";
  alumno: string ="Oscar Pérez";
}
