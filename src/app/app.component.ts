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
    console.log("Hii Angular js")
  }


  
}
