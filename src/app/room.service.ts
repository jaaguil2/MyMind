import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NewRoom } from './interface/newRoom';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://localhost:4000/api/'

  constructor(private http: HttpClient) { }

  getHome(userId: string) {
    return this.http.get(this.apiUrl+"room/home/"+userId)
      .pipe(catchError(this.handleError));
  };

  getRoom(id: string) {
    return this.http.get(this.apiUrl + "room/" + id)
      .pipe(catchError(this.handleError));
  };

  newRoom(obj: NewRoom) {
    return this.http.put(this.apiUrl + "room/new/" + obj.id, {name: obj.name})
      .pipe(catchError(this.handleError));
  }

  setThoughts(obj: any) {
    return this.http.put(this.apiUrl + "room/" + obj.id, { thoughts: obj.thoughts})
      .pipe(catchError(this.handleError));
  }

  deleteRoom(id: string) {
    return this.http.delete(this.apiUrl + "room/" + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  };

}
