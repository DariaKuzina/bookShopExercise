import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthorizationService {
  public redirectUrl: string;
  private storageKey = 'currentUser';
  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  login(username: string, password: string) {

    this.userService.getUserByLogPass(username, password)
      .then(user => this.tryLog(user))
      .catch(error => console.log(error));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.storageKey);
    this.route.navigate(['/about']);
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  isLogged(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  isAdmin(): boolean {
    var user = this.getCurrentUser();
    return user && user.isAdmin;
  }

  private tryLog(user: User): void {
    if (user) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
    }
    if (this.redirectUrl) {
      this.route.navigate([this.redirectUrl]);
      this.redirectUrl = null;
    }
    else {
      this.route.navigate(['/orders']);
    }
  }

}