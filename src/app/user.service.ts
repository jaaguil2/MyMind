import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

// Interface
import { UserSignIn } from './interface/userSignIn';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin': '*'
    })
  };

  private apiUrl = 'https://mymind-be.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  signIn(signIn: UserSignIn) {
    return this.http.post(this.apiUrl + "signin", signIn, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  signUp(user: User) {
    return this.http.post(this.apiUrl+'signup', user, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
