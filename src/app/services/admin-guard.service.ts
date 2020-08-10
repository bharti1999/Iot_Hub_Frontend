import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private auth: AuthService, private router:Router) { }

  canActivate(){
    if(this.auth.IsLoggedIn()){
       let user=this.auth.getUser().identity;
       if(user=="admin@gmail.com") return true;
    }
    this.router.navigateByUrl("/");
  }
}
