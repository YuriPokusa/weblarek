import { IProduct } from "../../types";
export class Product {
    id: string;
    title: string;
    description: string; 
    image: string;
    category: string;
    price: number | null;

    constructor(product: IProduct) {
        this.id = product.id;
        this.title = product.title;
        this.description = product.description;
        this.image = product.image;
        this.category = product.category;
        this.price = product.price;
    }
}