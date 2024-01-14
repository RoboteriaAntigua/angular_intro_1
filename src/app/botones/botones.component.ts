import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {

  }

text_color:string="";
button_disabled:boolean = false;  //por defecto vale false
button_disabled2:boolean =false;
variable_cambio:boolean=false;

//Variable imagenes, mas sobre propiedades
src_var:string="";
img1:string ="../../assets/20180625_205106.jpg";
img2:string="../../assets/20180816_205211.jpg";
img3:string="../../assets/20181130_211051.jpg";

}
