import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ThingsService } from '../services/things.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  public User=null;
  public things=null;
  public error=null;
  constructor(private auth: AuthService,
    private thing:ThingsService,
    private router:Router) { }

  ngOnInit(): void {
   this.User=this.auth.getUser().identity;
   this.thing.getThings()
    .subscribe((res:any)=>{
      this.things=res.result;
      console.log(this.things)
    })
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl("/");
  }

  certificateProvision(thing){
    let card={
      user:thing[4],
      carId:thing[2]
    }
    this.thing.certProvision(card)
      .subscribe((res)=>{
        alert("Certificate Provisioning done successfully !! ");
        window.location.reload();
      },error=>{
        this.error=error;
      })
  }



}
