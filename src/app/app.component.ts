import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// we cannot define the variable directly in class 
export class AppComponent {
  title = 'Hello jii';
  handleClick(event:any){
    // Same As E is Object of Exception Java
    console.log(event)
    console.log(event.target.name)
    console.log(event.target.classList)
  }
  // Handle Event given Info About Event In console

  handleEvent(event:MouseEvent){

    console.log(event.type);
    console.log()
  }
  handleChangeEvent(event:any){
    
    console.log(event.type)
    console.log((event.target as HTMLInputElement).value)
  }

  
}
