import './scss/styles.scss';
import { AppState } from './components/models/AppState';
import { Order } from './components/models/Order';
import { Product } from './components/models/Product';


const appState = new AppState();

/*const product = new Product({
    id: '',
    title: '',
    description: '',
    image: '',
    category: '',
    price: null
});*/

/*const order = new Order({
    payment: '',
    address: '',
    email: '',
    phone: '',
    items: []
});*/

import { apiProducts } from './utils/data';

console.log('=== setCatalog ===');
appState.setCatalog(apiProducts.items);
console.log(appState.catalog);

console.log('=== addToBasket ===');
appState.addToBasket(apiProducts.items[0]);
console.log(appState.basket);

console.log('=== removeFromBasket ===');
appState.removeFromBasket(apiProducts.items[0].id);
console.log(appState.basket);

console.log('=== setOrderField ===');
appState.setOrderField('address', 'Москва');
appState.setOrderField('payment', 'card');
console.log(appState.order);

console.log('=== validateOrder ===');
console.log(appState.validateOrder());

const product = new Product(apiProducts.items[0]);
console.log(product);

const order = new Order({
    payment: 'card',
    address: 'Москва',
    email: 'test@test.ru',
    phone: '+79990001122',
    items: ['1']
});

console.log(order);
console.log(order.validateOrder());
