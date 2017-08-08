import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders.routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './services/orders.service';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { MakeOrderComponent } from './make-order/make-order.component';


@NgModule({
  declarations: [
    OrdersComponent,
    UserOrdersComponent,
    MakeOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
  ],
  providers: [
    OrdersService
  ]
})
export class OrdersModule {}
