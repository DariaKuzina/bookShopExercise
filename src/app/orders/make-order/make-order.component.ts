import { Component, OnInit } from '@angular/core';
import { CartItem } from './../../models/cartItem';
import { CartService } from './../../cart/services/cart.service';
import { OrdersService } from './../../services/orders.service';
import { Order } from './../../models/order';

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
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.orderedItems = this.cartService.getCartContent();
    this.customerId = 'a1s2d2';
    this.shippingAddress = 'test';
  }

  confirmOrder(): void {
    this.ordersService.createOrder(
      new Order(
        this.orderedItems,
        this.shippingAddress,
        this.customerId,
        this.cartService.getTotalOfProducts(this.orderedItems)));
  }
}
