import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name?: string;
  password?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(`${this.name} ${this.password}`)
  }

}

// inputs for username and password
// take into variables
// send to service to validate
// button to submit