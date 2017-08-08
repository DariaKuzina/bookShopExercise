import { Component, OnInit, Input } from '@angular/core';
import { Order } from './../../models/order';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from './../../services/orders.service';

@Component({
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  orders: Array<Order>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrdersService
  ) { }

  ngOnInit() {
    // this.orders = [{
    //   items: [
    //     {
    //       productId: 1,
    //       productName: "The Hobbit",
    //       quantity: 1
    //     },
    //     {
    //       productId: 2,
    //       productName: "Martin Iden",
    //       quantity: 2
    //     }
    //   ],
    //   shippingAddress: "test",
    //   customerId: "a1s2d2"
    // }
    // ];

    this.orderService.getUsersOrders('a1s2d2')
      .then(orders => this.orders = orders)
      .catch((err) => console.log(err));
  }

}
