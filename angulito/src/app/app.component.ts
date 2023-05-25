import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formulario = {
    name: '',
    ape: '',
    age: null,
    cc: null
  };
  
  personas: any[] = [];
  
  guardarDatos() {
    this.personas.push({
      name: this.formulario.name,
      ape: this.formulario.ape,
      age: this.formulario.age,
      cc: this.formulario.cc
    });
  
    this.formulario = {
      name: '',
      ape: '',
      age: null,
      cc: null
    };
  }
  
  borrar(index: number) {
    this.personas.splice(index, 1);
  }
  
  contarMayoresEdad(): number {
    return this.personas.filter(persona => persona.age >= 18).length;
  }
  
  contarMenoresEdad(): number {
    return this.personas.filter(persona => persona.age < 18).length;
  }
}