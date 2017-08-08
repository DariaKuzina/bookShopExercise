import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad, Router, Route,
  ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras
} from '@angular/router';
import { AuthorizationService } from './../users/services/authorization.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivate Guard is called');
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivateChild Guard is called');
    const url: string = state.url;

    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    console.log('CanLoad Guard is activated');
    const url = `/${route.path}`;

    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
      
    if (this.authService.isLogged()) { return true; }

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);

    return false;
  }
}
