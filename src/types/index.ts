export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
    id: string;
    title: string;
    description: string; 
    image: string;
    category: string;
    price: number | null;
}

export interface IBasket {
items: string[];
}

export interface IBuyer {
    payment: 'card'|'cash'|'';
    address: string;
    email: string;
    phone: string;
}

export interface IOrder {
    payment: 'card'|'cash'|'';
    address: string;
    email: string;
    phone: string;
    items: string[];
}

export interface IOrderResult {
    id: string;
    total: number;
}

export interface IProductList {
    total: number;
    items: IProduct[];
}