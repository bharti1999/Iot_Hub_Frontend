import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public errMsg=null;

  constructor(private auth:AuthService,private router:Router) {}

  ngOnInit(): void {
  }

  
  OnSubmit(form){
    let user=form.value;
    this.auth.authenticateUser(user)
      .subscribe(
          (res:any) =>{
          localStorage.setItem("token",res.token)
          const username=this.auth.getUser().identity;
          if(username=="admin@gmail.com"){
            this.router.navigateByUrl("/admin-home");
          }
          else{
            this.router.navigateByUrl("/user-home");
          }
        },error=>{
          this.errMsg=error.error.error;
          form.reset();
          this.router.navigateByUrl('/');
        })
    }
}
