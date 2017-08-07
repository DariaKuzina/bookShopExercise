import { Component, OnInit } from '@angular/core';
import { CartItem } from './../models/cartItem';
import { CartService } from './services/cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private items: Array<CartItem>;
  constructor(
    private cartService : CartService
  ) { }

  ngOnInit() {
      this.items = this.cartService.getCartContent();
  }

  clear(): void{
    this.items = this.cartService.clear();
  }

}
