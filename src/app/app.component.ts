import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './porfile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LoginComponent,SignupComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// we cannot define the variable directly in class 
export class AppComponent {
  title = 'Hello jii';
  // example let x=2;

  // this function called when click Event Occur i.e means if button is pressed
  handleClickEvent(){
    alert("yoou click that Button")
  }
}
