import { Component } from '@angular/core';
import { AuthorizationService } from './users/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private authService: AuthorizationService
  ) { }

  isLogged(): boolean {
    return this.authService.isLogged();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
  }
}
