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
  username:string;
  password:string;

  constructor(private loginService:loginService,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
  }

  logIn() {
    if(this.username!= "" && this.username!=null &&this.username!=undefined) {
       if(!this.loginService.onLogin(this.username,this.password)) {
          this.toastr.error('Please enter correct username and password', 'Alert!');
       }
    } else{
      this.toastr.warning('Username or password cannot be empty.', 'Alert!');
    }
    
  }

  
}
