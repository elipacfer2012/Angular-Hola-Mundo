import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button [class.activo] = "isActive">MI BOTON</button>` ,
  styles: [`
  	.activo{
  		background: red;
  	}
  `]
})
export class AppComponent {
  mensaje = 'CURSO DE ANGULAR';
  nombre = 'Marco';
  isActive = true;
  getNombre(){
  	return this.nombre;
  }
}
