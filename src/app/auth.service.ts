import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : any = environment.baseURL;

  constructor(private http: HttpClient) { }

  getUserDetails(){
    //get user data from api server and return
    return this.http.get(this.baseUrl);

  }


  createUser(name: string ,email: string ,password: string){
    const authData  = {name:name , email:email , password:password};
    this.http.post("http://localhost:8081/api/signup",authData)
      .subscribe(response =>{
        console.log(response);
      });

    }

}
