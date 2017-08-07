import { Product } from './product'

export class Book extends Product {
    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
        public author : string,
        public genre : string
    ) {
        super(id, name, description, price);
    }
}