import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManService {
  readonly baseURL = "http://localhost:8000/man";          
  current:String="";
  man:man=new man("","","","","");

  constructor(private http: HttpClient) { }
  getman(){
   return this.http.get(this.baseURL);
  }
  postusr(man:man){
    return this.http.post(this.baseURL,man);
  }
  delete(obj:String){
    return this.http.delete(this.baseURL+`/${obj}`);
  }
  update(man1:man){
    return this.http.put(this.baseURL+`/${this.current}`,man1);
  }
}
export class man{
  name:String;
  email:String;
  password:String;
  id:String;
  img:String;


  constructor(name:string,email:string,password:string,id:string,img:string) {
    this.name=name;
    this.email=email;
    this.password=password;
    this.id=id;
    this.img=img;
    

   }
   
}
