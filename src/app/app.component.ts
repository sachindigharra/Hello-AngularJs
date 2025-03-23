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
  title = 'Get & Set Value of Input Field';

  Value:any;
 email:String='';

  setValue(event:any){
    this.Value = (event.target as HTMLInputElement).value;
  }
  getEmail(email:String){
    this.email=email;
    console.log(email);
  
  }
  

  
}
