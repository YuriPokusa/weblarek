import './scss/styles.scss';
import { Basket } from './components/models/Basket';
import { Buyer } from './components/models/Buyer';
import { Products } from './components/models/Products';
import { LarekApi } from './components/LarekApi';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';

import { apiProducts } from './utils/data';

const products = new Products();
products.setItems(apiProducts.items);
console.log('Все товары:',products.getItems());
console.log('Товар по id:', products.getItemById(apiProducts.items[0].id));
products.setPreview(apiProducts.items[0]);
console.log('Предпросмотр товара:', products.getPreview());

const basket = new Basket();

basket.addToBasket(apiProducts.items[0]);
console.log('Товары в корзине:', basket.getItems());

basket.removeFromBasket(apiProducts.items[0].id);
console.log('Товары в корзине после удаления:', basket.getItems());

basket.clear();
console.log('Товары в корзине после очистки:', basket.getItems());

const buyer = new Buyer();
buyer.setField('payment', 'card');
buyer.setField('address', 'Москва');
buyer.setField('email', 'test@test.ru');
buyer.setField('phone', '+79990001122');

console.log('Данные покупателя:', buyer.getData());

console.log('Валидация заказа:',    buyer.validate());

buyer.clear();

console.log('Данные покупателя после очистки:', buyer.getData());

const api = new Api(API_URL);

const larekApi = new LarekApi(api);

larekApi.getProductList()
.then((data) => {
    products.setItems(data.items);
    console.log('Каталог с сервера:', products.getItems());
})
.catch((err) => {
    console.log('Ошибка при получении каталога:', err);
});



