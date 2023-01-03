import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selector';
  formulario ={
    firstNumber: 0,
    secondNumber: 0,
    operation: "",
    result: 0,
    color: "",
    message:""
  }
  operation(){
    if(this.formulario.operation==='None'){
      this.formulario.message="No hay nada"
        console.log('(No eligió operación)')
    } 
    else if(this.formulario.operation==='Suma')
    {
        this.formulario.result = this.formulario.firstNumber+this.formulario.secondNumber;
        this.formulario.color = 'blue';
        this.formulario.message="El resultado es: "+this.formulario.result;
        console.log('Suma');
    } 
    else if(this.formulario.operation==='Resta')
    {
        this.formulario.result = this.formulario.firstNumber-this.formulario.secondNumber;
        this.formulario.color = 'red';
        this.formulario.message="El resultado es: "+this.formulario.result;
        console.log('Resta')
    } 
    else if(this.formulario.operation==='Multiplicación')
    {
        this.formulario.color = 'green';
        this.formulario.result = this.formulario.firstNumber*this.formulario.secondNumber;
        this.formulario.message="El resultado es: "+this.formulario.result;
        console.log('Multiplicación')
    } 
    else{
        this.formulario.color = 'purple';
        this.formulario.result = this.formulario.firstNumber/this.formulario.secondNumber;
        this.formulario.message="El resultado es: "+this.formulario.result;
        console.log('División')
    }
  }

}
  

