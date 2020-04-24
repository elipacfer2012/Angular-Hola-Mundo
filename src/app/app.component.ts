import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-root',
  template: `<button [class.activo] = "isActive">MI BOTON</button>
            <hr>
            <button (click) = "save($event)"> Guardar </button>
            <br><br>
            <button (mouseover) = "save($event)"> Guardar </button>
            <hr>
            <input type = "text" (keyup.enter) = "onKeyUp(nombre.value)" #nombre/>
            <hr>
            <input type = "text" [(ngModel)] = "estudiante.nombre">
            <br><br>
            <p>{{ estudiante.nombre }}</p>
            <hr>
            <ul>
              <li *ngFor="let persona of personas">
                {{ persona.nombre }}
              </li>
            </ul>
            `,
  styles: [`
  	.activo{
  		background: red;
  	}
  `],
  providers : [
    UsuariosService
  ]
})
export class AppComponent {

  mensaje = 'CURSO DE ANGULAR';
  nombre = 'Marco';
  isActive = true;
  getNombre(){
  	return this.nombre;
  }

  save(e){
    console.log(e);
  }


  onKeyUp(usuario){
    console.log(usuario);
  }

  estudiante = {
    nombre: 'Marco',
    edad: '22'
  }

  personas: any = [];
  constructor(private usuariosservice : UsuariosService) {
    this.personas = usuariosservice.getUsuarios();
  }
}
