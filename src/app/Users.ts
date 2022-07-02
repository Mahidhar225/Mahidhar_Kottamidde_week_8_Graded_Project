export class Users{
    id:number;
    userName:String;
    Password:String;
    Phone:String;
    Email:String;
    Usertype:String;
    WishList:number[];
    Completed:number[];
    constructor(id:number,userName:string,Password:String,Phone:String,
        Email:String,
        Usertype:String,
        WishList:number[],
        Completed:number[]){
        this.id=id;
        this.userName=userName;
        this.Password=Password;
        this.Phone=Phone;
        this.Email=Email;
        this.Usertype=Usertype;
        this.WishList=WishList;
        this.Completed=Completed;
        }


}