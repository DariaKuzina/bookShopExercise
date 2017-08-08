import { Injectable } from '@angular/core';
import { CartItem } from './../../models/cartItem'

@Injectable()
export class CartService {
  private storageKey: string;

  constructor() { }

  add(item: CartItem): CartItem[] {

    let existing: CartItem[] = this.getCartContent();

    if (existing == null)
      existing = [];

    let existingProductIndex = existing.findIndex(it => it.productId === item.productId);

    if (existingProductIndex === -1)
      existing.push(item);
    else
      existing[existingProductIndex] = new CartItem(
        item.productId,
        item.productName,
        existing[existingProductIndex].quantity + item.quantity,
        item.price);

    this.store(existing);
    return existing;
  }
  clear(): CartItem[] {
    localStorage.removeItem(this.storageKey);
    return [];
  }

  getCartContent(): CartItem[] {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  store(info: CartItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(info));
  }

  getTotal() : number{
    return this.getTotalOfProducts(this.getCartContent());
  }
  
  getTotalOfProducts(items : Array<CartItem>) : number{
    let total = 0;
    items.forEach(element => {
      total+=element.quantity * element.price;
    });
    return total;
  }
}
