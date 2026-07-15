import { IBuyer, IBuyerErrors, TPayment } from "../../types";

export class Buyer {
    protected payment: TPayment = '';
    protected address: string = '';
    protected email: string = '';
    protected phone: string = '';

    setField(field: keyof IBuyer, value: string): void {
        switch(field) {
            case 'payment':
            if (value === 'card' || value === 'cash') {
                this.payment = value;
            }
            break;
            case 'address':
                this.address = value;
                break;
            case 'email':
                this.email = value;
                break;
            case 'phone':
                this.phone = value;
                break;
        }
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
           