import { IApi, IOrder, IOrderResult, IProductList } from '../../types';

export class LarekApi {
    constructor(private api: IApi) {}

    /*get<T extends object>(uri: string): Promise<T> {
        return this.api.get<T>(uri);
    }

    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T> {
        return this.api.post<T>(uri, data, method);
    }*/

    getProductList(): Promise<IProductList> {
        return this.api.get<IProductList>('/product');
    }

    orderProducts(order: IOrder): Promise<IOrderResult> {
        return this.api.post<IOrderResult>('/order', order);
    }
}