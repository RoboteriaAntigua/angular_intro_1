import { Component } from '@angular/core';
//-- Usamos la interfaz llamada persona
import { persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent {

  //array de objetos tipo persona
  //Quiero define varias personas, la interfaz persona ahorra codigo en typescript
  arreglo_de_personas: persona[] = [
    {nombre: 'juan', edad:31},
    {nombre:'pepe', edad:20},
    {nombre: 'ulises', edad:54}
  ];
}
