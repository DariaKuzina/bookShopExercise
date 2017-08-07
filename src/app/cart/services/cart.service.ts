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

    existing.push(item);
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
}
