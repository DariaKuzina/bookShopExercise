import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './../users/services/authorization.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthorizationService
  ) { }

  ngOnInit() {
  }

  login(login: string, password: string): void {
    this.authService.login(login, password);
  }

  logout(): void {
    this.authService.logout();
  }

}
