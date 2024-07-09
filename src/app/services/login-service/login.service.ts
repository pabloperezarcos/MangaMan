import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 1294a02d-5106-4541-a1cc-66d4b7373d9c'
    })
  }

  private usersURL = 'https://firebasestorage.googleapis.com/v0/b/mangaman-770dc.appspot.com/o/documents%2Fusers.json?alt=media&token=1294a02d-5106-4541-a1cc-66d4b7373d9c'

  getUsers(): Observable<any> {
    return this.http.get(this.usersURL, this.httpOptions);
  }
}