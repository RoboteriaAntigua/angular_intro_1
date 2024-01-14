import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Componente root'; //sin typescript seria title = 'algo'

  //algo de codigo para no aburrirce y practicar interpolacion
  numero2:number = Math.random();   //implicito: numero2 = Math.random();


    /*Usando codigo javascript en ts recordar que estamos adentro de una clase,
    entonces:
     Las funciones las definimos como metodos.
     Lo que queremos que se ejecute lo ponemos en el constructor
     accedemos a metodos y atributos con this.atributo
     */
     public HelloWorld() {
      alert('Hola soy un alert');
      }

    constructor(){
      console.log("1. Start of the code; Will execute the timeout");
      setTimeout(this.HelloWorld, 3000);
      console.log("Before the pop-up this log will be displayed");
    }
}
