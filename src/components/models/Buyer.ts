import { IBuyer, IBuyerErrors } from "../../types";

export class Buyer {
    payment: 'card'|'cash'|''= '';
    address: string = '';
    email: string = '';
    phone: string = '';

    setField(field: keyof IBuyer, value: string): void {
        this[field] = value as never;
    }

    getData(): IBuyer {
        return {
            payment: this.payment,
            address: this.address,
            email: this.email,
            phone: this.phone
        };
    }

    clear(): void {
        this.payment = '';
        this.address = '';
        this.email = '';
        this.phone = '';
    }

    validate(): IBuyerErrors {
       const errors: IBuyerErrors = {};

       if (!this.payment) {
           errors.payment = 'Выберите способ оплаты';
       }

       if (!this.address.trim()) {
           errors.address = 'Введите адрес доставки';
       }

       if (!this.email.trim()) {
           errors.email = 'Введите email';
       } 

       if (!this.phone.trim()) {
           errors.phone = 'Введите номер телефона';
       }

       return errors;
    }
}
           