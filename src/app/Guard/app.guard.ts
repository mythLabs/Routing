import {CanActivate} from "@angular/router";
import{loginService} from '../Services/app.loginService';
import {Router} from "@angular/router";
import {Injectable} from '@angular/core';

@Injectable()
export class guard implements CanActivate {

   constructor(private loginService:loginService,private router:Router ) {

   }

 canActivate() {
    if(this.loginService.checkIfLoggedIn()) {
        return true;
    }else {
        this.router.navigate(['/login']);
    }
    
  }
}