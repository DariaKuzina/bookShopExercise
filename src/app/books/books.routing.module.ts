import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
    data: {
      title: 'Books available'
    }
  },
  {
    path: 'books/details/:id',
    component: DetailsComponent,
    data: {
      title: 'Book details'
    }
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
export class BooksRoutingModule { }
