import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Injections
import { UserService } from '../user.service';
import { RoomService } from '../room.service';

// Interfaces
import { User } from '../interface/user';
import { token } from '../interface/token';
import { Room } from '../interface/room';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // variable for error display to user
  errorView?: string

  // inject User api
  constructor(private roomService: RoomService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  handleSignUp(name: string, userName:string, password: string, cPassword: string, email: string) {
    // add args into array for ease of use
    const inputArray = [name, userName, password, cPassword, email];
    // remove extra spaces from ends and start
    inputArray.forEach(e => e.trim());
    // do nothing if there are any black spaces
    if (inputArray.includes('')) {
      this.errorView = "No black spaces";
      return;
    };
    // check if matching passwords
    if (password !== cPassword) {
      this.errorView = "Passwords do not match";
      return;
    }
    // call signUp()
    this.userService.signUp({ name, userName, password, email } as User)
      .subscribe(
        res => {
          // set token
          let newToken = res as token
          // navigate to new room
          this.roomService.getHome(newToken.id)
            .subscribe(res => {
              let room = res as Room
              this.router.navigate([`room/${room._id}`])
            })
        },
        err => this.errorView = err.error
      )
  };
};
