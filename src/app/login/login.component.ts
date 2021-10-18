import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { UserSignIn } from '../interface/userSignIn';
import { token } from '../interface/token';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorView?: string

  // inject user api class
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(userName: string, password: string): void {
    // remove extra spaces
    userName = userName.trim()
    password = password.trim()
    // do nothing if black username and password
    if (!userName && !password) {return;}
    // make the call(signIn) in userService
    this.userService.signIn({ userName, password } as UserSignIn)
      .subscribe(
        res => {
          let newtoken = res as token
          this.userService.setToken(newtoken.token)
          this.router.navigate(['home'])
        },
        err => this.errorView = err.error
      ) // put in error message
    
  }
}

// inputs for username and password
// take into variables
// send to service to validate
// button to submit