import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../models/userModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 1294a02d-5106-4541-a1cc-66d4b7373d9c'
    })
  }

  private usersDocumentURL = 'https://firebasestorage.googleapis.com/v0/b/mangaman-770dc.appspot.com/o/documents%2Fusers.json?alt=media&token=1294a02d-5106-4541-a1cc-66d4b7373d9c';

  constructor(private http: HttpClient) { }

  getRegisteredUsers(): Observable<any> {
    return this.http.get(this.usersDocumentURL, this.httpOptions);
  }

  updateRegisteredUsers(registeredUsers: UserModel[]) {
    console.log(registeredUsers)

    this.http.post(this.usersDocumentURL, registeredUsers, this.httpOptions).subscribe(
      response => {
        console.log('Usuarios actualizados correctamente');
      },
      error => {
        console.error('Error al actualizar usuarios')
      }
    );
  }
}
