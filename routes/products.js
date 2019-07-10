var express = require('express');
var router = express.Router();

var products = [
    {
        id: 1,
        name: 'Mersedes S550 4matic',
        cost: "118 000",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
        info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 2,
        name: 'Mersedes S550 4matic',
        cost: "55 000",
        img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
        info: '',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 3,
        name: 'Mersedes S550 4matic',
        cost: "118 000",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
        info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 4,
        name: 'Mersedes S550 4matic',
        cost: "55 000",
        img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
        info: '',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 5,
        name: 'Mersedes S550 4matic',
        cost: "118 000",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
        info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 6,
        name: 'Mersedes S550 4matic',
        cost: "55 000",
        img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
        info: '',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 7,
        name: 'Mersedes S550 4matic',
        cost: "118 000",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
        info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 8,
        name: 'Mersedes S550 4matic',
        cost: "55 000",
        img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
        info: '',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 9,
        name: 'Mersedes S550 4matic',
        cost: "118 000",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
        info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 10,
        name: 'Mersedes S550 4matic',
        cost: "55 000",
        img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
        info: '',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 11,
        name: 'Mersedes S550 4matic',
        cost: "118 000",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg/1200px-Mercedes-Benz_S_500_%28W_222%29_%E2%80%93_Frontansicht%2C_6._April_2014%2C_Neuss.jpg',
        info: 'Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации существенных финансовых и административных условий.',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    },
    {
        id: 12,
        name: 'Mersedes S550 4matic',
        cost: "55 000",
        img: 'https://img.drivemag.net/jato_car_photos/MERCEDES%2FS-CLASS%2Fsedan%2F4%2F2009%2Fexterior-photos%2Fo%2Fmercedes-s-class-sedan-4-doors-2009-model-exterior-photos-0.jpg',
        info: '',
        dateUp: '20.05.2019',
        productProps: [{id: 1, name: 'Цвет авто', type: 'dropdown', value: 'синий'},
            {id: 2, name: 'Год выпуска', type: 'string', value: '2017'},
            {id: 3, name: 'Тип топлива', type: 'string', value: 'бензин'}]
    }
];


router.post('/', function (req, res) {
    const {perPage, currentPage} = req.body;
    const start = perPage * (currentPage - 1);
    const end = start + perPage;
    const items = products.slice(start, end);
    res.json({
        productsList: {
            perPage,
            currentPage,
            products: items.map(({id, name, cost, dateUp}) => ({id, name, cost, dateUp}))
        }
    });
});

router.get('/:id', function (req, res) {
    let id = +req.params.id;
    let product = products.find(product => product.id === id);
    res.json({selectProduct: product});
});

router.post('/add', function (req, res) {
    const maxId = Math.max.apply(Math, products.map(item => item.id));
    const newItem = {id: maxId + 1, ...req.body};
    products.push(newItem);
    res.send();
});

router.post('/update', function (req, res) {
    let index = products.findIndex(item => item.id === req.body.id);
    products[index] = req.body;
    res.send();
});

router.delete('/delete/:id', function (req, res) {
    let id = +req.params.id;
    products = products.filter((item) => item.id !== id);
    res.send();
});

module.exports = router;


