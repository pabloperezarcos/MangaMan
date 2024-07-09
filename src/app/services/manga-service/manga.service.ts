import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer d7a86e39-94ef-45c0-9ee9-79fa6344dbb8'
    })
  }

  private documentURL = 'https://firebasestorage.googleapis.com/v0/b/mangaman-770dc.appspot.com/o/documents%2Fproducts.json?alt=media&token=d7a86e39-94ef-45c0-9ee9-79fa6344dbb8';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {

    return this.http.get(this.documentURL, this.httpOptions);
  }


}
