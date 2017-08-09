import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad, Router, Route,
  ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras
} from '@angular/router';
import { AuthorizationService } from './../users/services/authorization.service';

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivate Guard is called');
    const url: string = state.url;

    return this.checkAdminLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivateChild Guard is called');
    const url: string = state.url;

    return this.checkAdminLogin(url);
  }

  canLoad(route: Route): boolean {
    console.log('CanLoad Guard is activated');
    const url = `/${route.path}`;

    return this.checkAdminLogin(url);
  }

  private checkAdminLogin(url: string): boolean {
      
    if (this.authService.isAdmin()) { return true; }

    this.authService.redirectUrl = url;

    if(this.authService.isLogged())
      this.authService.logout();

    this.router.navigate(['/login']);

    return false;
  }
}
