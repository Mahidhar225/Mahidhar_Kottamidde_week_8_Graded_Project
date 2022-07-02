import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../Books';
import { RestService } from '../rest.service';
import { Users } from '../Users';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  books:Books[]=[];
  users:Users[]=[];
  i:number=0;
  j:number=0;
  k:number=0;
  success:boolean=false;
  addedToWishList:boolean=true;
  wishListElements:Books[]=[];
  wishList:number[]=[];
  constructor(private rs:RestService,private router:Router) { }

  logout(){
    if(this.rs.getMessage()){
      this.rs.setMessage(false);
      alert("logout successful");
      this.router.navigateByUrl('\display');
    }
    else{
      alert("already logged out");
      this.router.navigateByUrl('\display');
    }
  }
  ngOnInit(): void {
    this.success=this.rs.getMessage();
    this.rs.getBooks().subscribe(
      (response: any)=>{
        this.books=response;
      }
    )
    this.rs.getUsers().subscribe(
      (response:any)=>{
        this.users=response; 
        this.wishList=this.users[this.rs.getUserLogIn()]["WishList"];
        for(this.i=0;this.i<this.wishList.length;this.i++){
          for(this.j=0;this.j<this.books.length;this.j++){
            if(this.wishList[this.i]==this.books[this.j]["id"]){
              this.wishListElements.push(this.books[this.j]);
              break;
            }
          }
        }
      }
    )
  }

}
