import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

abrir_alerta:boolean=false;
nombre:string="";

mostrar(id1: string){
  //console.log(id1);
  this.abrir_alerta=true;
  this.nombre=id1;          //Muestro el nombre en el alerta
  }


}
