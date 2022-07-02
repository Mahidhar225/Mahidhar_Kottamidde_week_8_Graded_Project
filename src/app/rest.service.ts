import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Books } from './Books';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  linka:string="http://localhost:3000/Books";
  linkb:string="http://localhost:3000/Users";
  operate:boolean=false;
  wishList:number[]=[];
  wishEle:Books[]=[];
  user:number=0;
  completed:number[]=[];
  userDetails!:Users;
  addCompleted(completed:number){
    this.completed.push(completed);
  }


  getBooks(){
    return this.http.get<Books[]>(this.linka);

  }
  getUsers(){
    return this.http.get<Books[]>(this.linkb);
  }
  getMessage(){
    return this.operate;
  }
  setMessage(success:boolean){
    this.operate=success;
  }
  addWishList(user:Users){
    this.http.put(this.linkb+'/'+user.id,user).subscribe((data)=>{
      console.log(data);

    });
  }
  addList(user:Users){
    this.http.put(this.linkb+'/'+user.id,user).subscribe((data)=>{
      console.log(data);
    });
  }
  getWishList(){
    return this.http.get("http://localhost:3000/Users");
  }
  getWishListElements(){
    return this.wishEle;
  }
  setWishListElements(ele:Books){
    this.wishEle.push(ele);

  }
  setUserLogIn(user:number){
    this.user=user;
  }
  getUserLogIn(){
    return this.user;
  }
  getCompleted(){
    return this.http.get("http://localhost:3000/Users");
  }
  getFullUserDetails(){
    return this.userDetails;
  }
  setFullUsersDetails(user:Users){
      this.userDetails=user;
  }
  registerUser(user:Users){
    this.http.post("http://localhost:3000/Users",user).subscribe(((data)=>{
      console.log(data);
    }));
  }
}
