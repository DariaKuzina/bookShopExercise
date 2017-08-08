export class CartItem {
    constructor(
        public productId: number,
        public productName: string,
        public quantity: number,
        public price: number
    ) {
    }
}