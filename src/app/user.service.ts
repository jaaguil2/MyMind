import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { UserSignIn } from './interface/userSignIn';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token?: string;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: ''
    })
  }

  private apiUrl = 'http://localhost:4000/api/'

  constructor(private http: HttpClient) { }

  signIn(signIn: UserSignIn) {
    return this.http.post(this.apiUrl+"signin", signIn)
      .pipe(catchError(this.handleError))
  }

  setToken(token: string) {
    this.httpOptions.headers =
      this.httpOptions.headers.set('Authorization', token);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
