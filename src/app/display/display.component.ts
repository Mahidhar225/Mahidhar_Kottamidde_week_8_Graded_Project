import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../Books';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private rs:RestService,private router:Router) { }
  result=[];
  i:number=0;
  user!:Users;
  flag:boolean=true;
  users:Users[]=[];
  operate:boolean=false;
  wishBooks:number[]=[];
  CompletedBooks:number[]=[];
  Userdetails!:Users;
  addToWishList:boolean=true;
  success:boolean=false;

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

  wishList(ele:Books): void{
    this.operate=this.rs.getMessage();

    if(this.operate){
      this.wishBooks=this.rs.getFullUserDetails()["WishList"]
      this.flag=true;
      for(this.i=0;this.i<this.wishBooks.length;this.i++){
        if(this.wishBooks[this.i]==ele["id"]){
          alert("Already added to WishList")
          this.flag=false;
        }
      }
      if(this.flag){
        alert("added to wishlist");
        this.Userdetails=this.rs.getFullUserDetails();
        this.wishBooks=this.rs.getFullUserDetails()["WishList"];
        this.wishBooks.push(ele["id"]);
        this.user={"id":this.rs.getFullUserDetails()['id'], "userName":  this.rs.getFullUserDetails()['userName'],
        "Password": this.rs.getFullUserDetails()['Password'],
        "Phone":  this.rs.getFullUserDetails()['Phone'],
        "Email":  this.rs.getFullUserDetails()['Email'],
        "Usertype": "Customer",
        "WishList": this.wishBooks,
        "Completed": this.CompletedBooks
      }
      this.rs.addWishList(this.user);


      }
      console.log(this.wishBooks);
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }

  completed(ele:Books){
    this.operate=this.rs.getMessage();

    if(this.operate){
      this.flag=true;
      this.CompletedBooks=this.rs.getFullUserDetails()["Completed"];
      for(this.i=0;this.i<this.CompletedBooks.length;this.i++){
        if(this.CompletedBooks[this.i]==ele["id"]){
          this.flag=false;
          alert("Already added to Completed");
        }
      }
      if(this.flag){
        alert("Added to Completed");
        this.CompletedBooks=this.rs.getFullUserDetails()["Completed"];
        this.CompletedBooks.push(ele["id"]);
        
        this.user={"id":this.rs.getFullUserDetails()['id'], "userName":  this.rs.getFullUserDetails()['userName'],
        "Password":  this.rs.getFullUserDetails()['Password'],
        "Phone":  this.rs.getFullUserDetails()['Phone'],
        "Email":  this.rs.getFullUserDetails()['Email'],
        "Usertype": "Customer",
        "WishList": this.wishBooks,
        "Completed": this.CompletedBooks
      }
      this.rs.addList(this.user);
        
      }
      console.log(this.CompletedBooks);
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }
  
  book:Books[]=[];
  ngOnInit(): void {
    this.rs.getBooks().subscribe(
      (response)=>{
        this.book=response;
      }
    )

    this.rs.getUsers().subscribe(
      (response:any)=>{
        this.users=response;
        for(this.i=0;this.i<this.users.length;this.i++){
          this.wishBooks=this.users[this.i]['WishList'];
          this.CompletedBooks=this.users[this.i]['Completed'];
          console.log(this.CompletedBooks);
        }
      }
    )
  }
}
