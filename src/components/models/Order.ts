import { IOrder } from "../../types";

export class Order {
    payment: 'card'|'cash'|'';
    address: string;
    email: string;
    phone: string;
    items: string[];

    constructor(order: Partial<IOrder>) {
        this.payment = order.payment || '';
        this.address = order.address || '';
        this.email = order.email || '';
        this.phone = order.phone || '';
        this.items = order.items || [];
    }
    validateOrder(): boolean {
        return true;
    }
}
    