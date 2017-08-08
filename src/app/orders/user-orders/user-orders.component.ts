import { Component, OnInit, Input } from '@angular/core';
import { Order } from './../../models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../services/orders.service';
import { AuthorizationService } from './../../users/services/authorization.service';

@Component({
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  orders: Array<Order>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private authService : AuthorizationService
  ) { }

  ngOnInit() {

    let userId = this.authService.getCurrentUser().id;
    this.orderService.getUsersOrders(userId)
      .then(orders => this.orders = orders)
      .catch((err) => console.log(err));
  }

}
