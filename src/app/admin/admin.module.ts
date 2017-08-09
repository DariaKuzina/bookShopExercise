import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { HandleOrdersComponent } from './handle-orders/handle-orders.component';
import { AdminComponent } from './admin.component';
import { HandleBooksComponent } from './handle-books/handle-books.component';
import { OrderComponent } from './handle-orders/order/order.component';
import { BookComponent } from './handle-books/book/book.component';
import { EditBookComponent } from './handle-books/edit-book/edit-book.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations:
  [
    AdminDashboardComponent,
    HandleOrdersComponent,
    AdminComponent,
    HandleBooksComponent,
    OrderComponent,
    BookComponent,
    EditBookComponent
  ]
})

export class AdminModule { }
