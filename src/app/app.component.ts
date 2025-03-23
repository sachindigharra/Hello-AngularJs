import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
 
export class AppComponent {
  title = 'Hello jii';
  Counter=0;
  // seprate fun for each Event
  handleDecrementClick(){
    if(this.Counter>0)this.Counter = this.Counter-1;
    else{
      this.Counter=0;
    }
    
  }
  handleIncrementClick(){
    this.Counter = (this.Counter+1);
  }
  handleResettClick(){
    this.Counter = 0;
  }
  handleCounterEvent(val:String){
    if(val=="plus"){
      this.Counter = (this.Counter+1);
    }
    else if(val=="minus" && this.Counter>0){
      this.Counter = this.Counter-1;
    }
    else{
      this.Counter=0;
    }

  }

 

  
}
