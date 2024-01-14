import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { FormBasadosPlantillasComponent } from './form-basados-plantillas/form-basados-plantillas.component';
import { FormsModule } from '@angular/forms';
import { IfejemploComponent } from './ifejemplo/ifejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    FormBasadosPlantillasComponent,
    IfejemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
