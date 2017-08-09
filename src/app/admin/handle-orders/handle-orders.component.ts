import { Component, OnInit, Input } from '@angular/core';
import { Order } from './../../models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../../orders/services/orders.service';
import { AuthorizationService } from './../../users/services/authorization.service';

@Component({
  templateUrl: './handle-orders.component.html',
  styleUrls: ['./handle-orders.component.css']
})
export class HandleOrdersComponent implements OnInit {

  orders: Array<Order>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService,
    private authService : AuthorizationService
  ) { }

  ngOnInit() {

    this.orderService.getAllOrders()
      .then(orders => this.orders = orders)
      .catch((err) => console.log(err));
  }

}
