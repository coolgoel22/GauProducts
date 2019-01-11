import { Component, OnInit, ViewChild } from '@angular/core';
import { DataControllerService } from '../services/data-controller.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  public newUser = {
    userName: '',
    password: ''
  };
  @ViewChild('loginForm') form:any;

  constructor(
    public data:DataControllerService,
    public authService: AuthService,
    public router:Router) { }

  ngOnInit() {
  }
  submit({value, valid}:{value:any, valid:boolean}){
    if(valid){
      this.authService.login(value.userName, value.password).then(result=>{
        if(result)
      }, err=>{
        debugger;
      });

      // this.router.navigate(['home']);
    }else{
      console.log("Form is not valid");
    }
  }
  
}
