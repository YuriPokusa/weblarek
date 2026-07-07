import { IBasket, IProduct } from "../../types";
export class Basket {
    protected basket: IBasket = {
        items: []
    };
    
    constructor() {}

    addToBasket(product: IProduct): void {
        this.basket.items.push(product);
    }

    removeFromBasket(id: string): void {
        this.basket.items = this.basket.items.filter(item => item.id !== id);
    }

    clear(): void {
        this.basket.items = [];
    }

    getTotal(): number {
        return this.basket.items.reduce((sum, item) => sum + (item.price ?? 0), 0);
    }

    getCount(): number {
        return this.basket.items.length;
    }

    hasItem(id: string): boolean {
        return this.basket.items.some(item => item.id === id);
    }

    getItems(): IProduct[] {
        return this.basket.items;
    }
}
