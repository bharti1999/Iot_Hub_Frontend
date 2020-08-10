import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {

  constructor(private http:HttpClient) { }

  public createNumberOfThings(things,user){
    let card={
      'email':user,
      'carName':things.carName,
      'carId':things.carId,
    };
    return this.http.post(environment.url+'/car-registration',card);
  }

  public getThings(){
    return this.http.get(environment.url+'/adminhome');
  }

  public certProvision(card){
    return this.http.post(environment.url+'/provisioning-cert',card);
  }


}
