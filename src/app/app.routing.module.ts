import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full',

  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  {

    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

export let appRouterComponents = [PageNotFoundComponent, LoginComponent, AboutComponent];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  // re-export RouterModule in order to have access
  // to its directives in main module.
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
