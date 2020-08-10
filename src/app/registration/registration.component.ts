import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public error=null;
  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  OnSubmit(form){
    let user=form.value;
     if(!form.invalid){
       this.auth.createUser(user)
       .subscribe(data =>{console.log(data); return this.router.navigateByUrl("/")},
       (Error)=>{
         console.log(Error);
         this.error=Error;
         this.router.navigateByUrl(`/registration`);
       });
     }
   }

}
