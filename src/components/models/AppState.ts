import { IProduct, IBasket, IOrder } from "../../types";
export class AppState {
    constructor() {
    }

    catalog: IProduct[] = [];
    basket: IBasket = { items: [] };
    order: Partial<IOrder> = {};

    setCatalog(items: IProduct[]): void {
        this.catalog = items;
    }
    addToBasket(product: IProduct): void {
        this.basket.items.push(product.id);
    }
    removeFromBasket(id: string): void {
        this.basket.items = this.basket.items.filter(item => item !== id);
    }
    getBasketTotal(): number {
        return 0;
    }
    setOrderField(field: keyof IOrder, value: string): void {
        this.order[field] = value as any;
    }
    validateOrder(): boolean {
        return true;
    }
}
