import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// we cannot define the variable directly in class 

export class AppComponent {

  title = 'Hello jii';
  // example let x=2;

  // this function called when click Event Occur 
  handleClickEvent(){
    alert("yoou click that Button")
    //call the method of own class
    this.demoFun();
  }
  demoFun(){
    console.log(this.name)
    console.log(this.name.toUpperCase())

  }

  //data container divide into two 
  // var 
  // properties or Data member of Class

  // Define type of var or Porperties 
  name:String='sachin';
  username="Hiii"; 

  //Multiple dataypes

  data:String|Boolean|Object="sa"

  Val:any;// it can holds any datatypes Value
  
}
let age =18;


