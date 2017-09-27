import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable()
export class loginService {
  users:({username:string,password:string})[]=[
      {username:"amit" ,password:"123"}
  ];

  /**
   *
   */
  constructor(private router:Router) {

  }

   onLogin(username,password):boolean {
     this.users.forEach(user => {
       if(user.username=== username && user.password === password)
       {
          localStorage.setItem("isLoggedIn","1");
          this.router.navigate(['/home']);
       }  
     });
     return false;
   }

   checkIfLoggedIn() {
       if(localStorage.getItem("isLoggedIn")) {
              return true;
       }else {
           return false;
       }
        
    }

    onLogOut() {
        localStorage.removeItem("isLoggedIn");
         this.router.navigate(['/login']);
    }

}