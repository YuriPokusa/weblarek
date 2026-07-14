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
    items: IProduct[];
}

export type TPayment = 'card' | 'cash' | '';

export interface IBuyer {
    payment: TPayment;
    address: string;
    email: string;
    phone: string;
}

export interface IBuyerErrors {
    payment?: string;
    address?: string;
    email?: string;
    phone?: string;
}

export interface IProductList {
    total: number;
    items: IProduct[];
}

export interface IOrder extends IBuyer {
    items: string[];
    total: number;
}

export interface IOrderResult {
    id: string;
    total: number;
}