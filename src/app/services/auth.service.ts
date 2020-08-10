import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private helper = new JwtHelperService();

  constructor(private http:HttpClient) { 
    
  }

  public authenticateUser(user){
    return this.http.post(environment.url+'/userlogin',user);
  }

  public createUser(user:any){
    return this.http.post(environment.url+'/registration',user);
  }

  public IsLoggedIn(){
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }

  public getUser(){
    if(this.IsLoggedIn()){
      return this.helper.decodeToken(localStorage.getItem("token"));
    }
  }

  public logout(){
    localStorage.removeItem("token");
  }
  
}
