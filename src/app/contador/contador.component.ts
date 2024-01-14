import { Component, OnInit } from "@angular/core";
import { objeto2_interface } from "../objeto2_interface";

@Component({
  selector:'app-contador',
  templateUrl:'./contador.component.html',
  styleUrls:['./contador.component.css']
})

export class contadorComponent implements OnInit{
  //Constructor y metodo ngOnInit sacado de la clase abstracta OnInit
  constructor () { }
  ngOnInit():void {    }


  /*Defino una variable para ser usada en el .html*/
 var1= "AlphaChanel1234";

 /* Defino un objeto para ser usado en */
 objeto1:{nombre:string, largo:number, funciona?:string} = {
  nombre: 'falcon',
  largo: 5,
  funciona: 'masomenos'
 };


 /*Objeto2 con los tipos en una interface, dicha interface con archivo aparte */
obj2:objeto2_interface = {
  nombre:'p504',
  largo:4,
};

/* Ejercicio del eventos, contador */
public numero:number = 1;

//Funciones para restar y sumar en el contador
restador(){
  this.numero--;
  return this.numero;
}

sumador(){
  this.numero++;
  return this.numero;
}


//fin de class contadorComponent
}


