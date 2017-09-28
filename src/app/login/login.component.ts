import { Component, OnInit } from '@angular/core';
import {loginService} from '../Services/app.loginService';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username:string;
  Password:string;
  constructor(private loginService:loginService,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  logIn() {
    if(this.Username!= "" && this.Username!=null &&this.Username!=undefined) {
       if(!this.loginService.onLogin(this.Username,this.Password)) {
          this.toastr.error('Please enter correct username and password', 'Alert!');
       }
    } else{
      this.toastr.warning('Username or password cannot be empty.', 'Alert!');
    }
    
  }

  
}
