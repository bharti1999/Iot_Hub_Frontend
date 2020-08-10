import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ThingsService } from '../services/things.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  public User=null;
  public no_of_things=null;
  public all_things=null;
  public response=null;
  constructor(private auth: AuthService,
    private router:Router,
    private things:ThingsService) { }

  ngOnInit(): void {
    this.User=this.auth.getUser().identity;
    console.log(this.User)
    this.things.getThings()
      .subscribe((res:any)=>{
        this.all_things=res.result;
        console.log(this.all_things);
      })
    
  }


  OnSubmit(form){
    this.things.createNumberOfThings(form.value,this.User)
      .subscribe(
          (res:any) =>{
          this.response=res;
          window.location.reload();
        })

      console.log(form.value);
    }



  logout(){
    this.auth.logout();
    this.router.navigateByUrl("/");
  }

}
