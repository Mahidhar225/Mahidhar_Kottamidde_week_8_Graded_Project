import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginformobj={
  //   username:'',
  //   password:''
  // };
  success:boolean=false;
  users:Users[]=[];
  username:string="";
  password:string="";
  var:boolean=true;
  user!:Users;
  onclick:boolean=false;
  i:number=0;
  constructor(private rs:RestService,private router:Router) { }

  ngOnInit(): void {
    this.success=this.rs.getMessage();
    this.rs.getUsers().subscribe(
      (response:any)=>
      {
          this.users=response;
      }
    );
  }

  login(){
    this.onclick=true;
    for(this.i=0;this.i<this.users.length;this.i++){
      if((this.users[this.i]["userName"]==this.username) && (this.users[this.i]["Password"]==this.password)){
        this.success=true;
        console.log("success");
        this.rs.setMessage(true);
        this.rs.setUserLogIn(this.i);
        this.user={
          "id":this.users[this.i]["id"],
          "userName":this.users[this.i]["userName"],
          "Password":this.users[this.i]["Password"],
          "Phone":this.users[this.i]["Phone"],
          "Email":this.users[this.i]["Email"],
          "Usertype":this.users[this.i]["Usertype"],
          "WishList":this.users[this.i]["WishList"],
          "Completed":this.users[this.i]["Completed"],
          
        }
        this.rs.setFullUsersDetails(this.user);
        alert("login successful");
        this.router.navigateByUrl('/home');
        break;
      }
      else{
        this.rs.setMessage(false);
      }
  }

  }
}
