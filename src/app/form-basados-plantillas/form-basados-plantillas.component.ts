import { Component } from '@angular/core';

@Component({
  selector: 'app-form-basados-plantillas',
  templateUrl: './form-basados-plantillas.component.html',
  styleUrls: ['./form-basados-plantillas.component.css']
})
export class FormBasadosPlantillasComponent {

  //defino un objeto js
  registro = {
    email:"",
    clave:""
  };

  //Funcion que dispara el evento (ngSubmit) del formulario
  procesar(){
    //aqui proceso la info del formulario
    //
  }
}
