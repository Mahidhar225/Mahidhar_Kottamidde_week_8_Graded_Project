import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week_8_Project';
  success:boolean=false;
  constructor(private rs:RestService,private router:Router){

  }
  logout(){
    if(this.rs.getMessage()){
      this.rs.setMessage(false);
      alert("logout successful");
      this.router.navigateByUrl('\home');
    }
    else{
      alert("already logged out")
    }
  }
}
