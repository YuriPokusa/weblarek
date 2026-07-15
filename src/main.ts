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
    basket.addToBasket(apiProducts.items[1]);
    basket.addToBasket(apiProducts.items[2]);

    console.log('Товары:', basket.getItems());
    console.log('Количество:', basket.getCount());
    console.log('Стоимость:', basket.getTotal());
    console.log(
    'Есть первый товар:',
    basket.hasItem(apiProducts.items[0].id)
);

    basket.removeFromBasket(apiProducts.items[1].id);
    console.log('После удаления второго товара');
    console.log('Товары после удаления:', basket.getItems());
    console.log('Количество после удаления:', basket.getCount());
    console.log('Стоимость после удаления:', basket.getTotal());
    console.log(
    'Есть второй товар:',
    basket.hasItem(apiProducts.items[1].id));

    basket.clear();
    console.log('После очистки корзины');
    console.log('Товары после очистки:', basket.getItems());
    console.log('Количество после очистки:', basket.getCount());
    console.log('Стоимость после очистки:', basket.getTotal());

const buyer = new Buyer();
buyer.setField('payment', 'card');
buyer.setField('address', 'Москва');
buyer.setField('email', 'test@test.ru');
buyer.setField('phone', '+79990001122');

console.log('Данные покупателя:', buyer.getData());

console.log('Валидация заказа:',    buyer.validate());

buyer.clear();

console.log('Данные покупателя после очистки:', buyer.getData());
console.log('Валидация пустой модели:', buyer.validate());

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

    