import { CartItem } from './cartItem';

export class Order {
    constructor(
        public items: Array<CartItem>,
        public shippingAddress: string,
        public customerId: string
    ) { }
}