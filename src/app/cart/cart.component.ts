import { Component, OnInit } from '@angular/core';
import { CartItem } from './../models/cartItem';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private items: Array<CartItem>;
  constructor(
    private cartService : CartService,
    private router : Router
  ) { }

  ngOnInit() {
      this.items = this.cartService.getCartContent();
  }

  clear(): void{
    this.items = this.cartService.clear();
  }
  order() : void{
    this.router.navigate(['/makeorder'])
  }

  getTotal() : number{
    return this.cartService.getTotal();
  }

}
