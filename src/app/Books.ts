// export class Books{
//     id:number;
//     author:String;
//     Country:String;
//     language:String;
//     Pages:number;
//     Title:String;
//     PublishYear:number;
//     constructor(id:number,
//         author:String,
//         Country:String,
//         language:String,
//         Pages:number,
//         Title:String,
//         PublishYear:number,){
//             this.id=id;
//             this.author=author;
//             this.Country=Country;
//             this.language=language;
//             this.Pages=Pages;
//             this.Title=Title;
//             this.PublishYear=PublishYear;
//         }

// }

export class Books{
    id:number;
    author:String;
    country:String;
    language:String;
    pages:number;
    title:String;
    year:number;
    link:String;
    imageLink:String;
    constructor(id:number,
        author:String,
        country:String,
        language:String,
        pages:number,
        title:String,
        year:number,
        link:String,
        imageLink:String){
            this.id=id;
            this.author=author;
            this.country=country;
            this.language=language;
            this.pages=pages;
            this.title=title;
            this.year=year;
            this.link=link;
            this.imageLink=imageLink;
        }

}