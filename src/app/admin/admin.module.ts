import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin.routing.module';
import { HandleOrdersComponent } from './handle-orders/handle-orders.component';
import { AdminComponent } from './admin.component';
import { HandleBooksComponent } from './handle-books/handle-books.component';
import { OrderComponent } from './handle-orders/order/order.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations:
  [
    AdminDashboardComponent,
    HandleOrdersComponent,
    AdminComponent,
    HandleBooksComponent,
    OrderComponent
  ]
})

export class AdminModule { }
