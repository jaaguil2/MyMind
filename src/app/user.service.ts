import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// Interface
import { UserSignIn } from './interface/userSignIn';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  private apiUrl = 'https://mymind-be.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  signIn(signIn: UserSignIn) {
    return this.http.post(this.apiUrl+"signin", signIn)
      .pipe(catchError(this.handleError))
  }

  signUp(user: User) {
    return this.http.post(this.apiUrl+'signup', user)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
