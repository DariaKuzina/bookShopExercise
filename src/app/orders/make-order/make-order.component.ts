import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from './../../models/cartItem';
import { CartService } from './../../cart/services/cart.service';
import { OrdersService } from './../services/orders.service';
import { Order } from './../../models/order';
import { AuthorizationService } from './../../users/services/authorization.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {

  orderedItems: Array<CartItem>;
  customerId: string;
  shippingAddress: string;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    private authService: AuthorizationService
  ) { }

  ngOnInit() {
    this.orderedItems = this.cartService.getCartContent();
    this.customerId = this.authService.getCurrentUser().id;
  }

  confirmOrder(): void {
    this.ordersService.createOrder(
      new Order(
        this.orderedItems,
        this.shippingAddress,
        this.customerId,
        this.cartService.getTotalOfProducts(this.orderedItems)))
      .then(r => {
        this.cartService.clear();
        this.router.navigate([`/orders`]);
      })
      .catch(error => console.log(error));

  }
}
