import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import './../../rxjs-extensions';

import { User } from './../../models/user';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:3000/users';

  constructor(
    private http: Http
  ) { }

  getAllUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => <User[]>response.json())
      .catch(this.handleError);
  }
  
  getUserByLogPass(login: string, password : string) : Promise<User>{
    return this.http.get(`${this.usersUrl}?login=${login}&&password=${password}`)
      .toPromise()
      .then(response => (<User[]>response.json())[0])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

