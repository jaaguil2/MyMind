import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { UserSignIn } from './UserSignIn'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(http: HttpClient) { }

  signIn() {

  }

}
