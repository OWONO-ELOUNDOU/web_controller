import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly endPoint = 'https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/';
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<{[key: string]: User}>(this.endPoint + 'users.json');
  }

  getAllDocuments() {
    this.http.get(this.endPoint + 'document.json')
    .subscribe((res) => {
      console.log(res)
    })
  }
}
