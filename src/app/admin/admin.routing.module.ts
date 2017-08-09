import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HandleOrdersComponent } from './handle-orders/handle-orders.component';
import { HandleBooksComponent } from './handle-books/handle-books.component';
import { EditBookComponent } from './handle-books/edit-book/edit-book.component';

import { AdminGuard } from './../guards/admin.guard'


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'orders', component: HandleOrdersComponent },
          {
            path: 'books',
            component: HandleBooksComponent,
            canActivateChild: [AdminGuard],
            children: [
              {
                path: 'edit/:id',
                component: EditBookComponent
              },
              {
                path: 'create',
                component: EditBookComponent
              }
            ]
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
