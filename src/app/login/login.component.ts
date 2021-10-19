import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Injections
import { UserService } from '../user.service';
import { RoomService } from '../room.service';

// Interfaces
import { UserSignIn } from '../interface/userSignIn';
import { token } from '../interface/token';
import { Room } from '../interface/room';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // variable for error display to user
  errorView?: string

  // inject user api
  constructor(private roomService: RoomService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSubmit(userName: string, password: string): void {
    // remove extra spaces from ends and start
    userName = userName.trim()
    password = password.trim()
    // do nothing if black username and password
    if (!userName && !password) {
      return;
    }
    // call signIn()
    this.userService.signIn({ userName, password } as UserSignIn)
      .subscribe(
        res => {
          // set token
          let newToken = res as token
          // navigate to home room, not just home page
          this.roomService.getHome(newToken.id)
            .subscribe(res => {
              let room = res as Room
              this.router.navigate([`room/${room._id}`])
            })
        },
        err => this.errorView = err.error
      )    
  }
}
