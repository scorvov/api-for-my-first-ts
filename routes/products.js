var express = require('express');
var router = express.Router();
const {isAuth, responsePageData} = require('../utils');
const Products = require('../data');
let products = new Products().getProducts();

router.post('/', function (req, res) {
    isAuth(req, res, () => responsePageData(products, req, res));
});

router.get('/:id', function (req, res) {
    isAuth(req, res, () => {
        const id = +req.params.id;
        const product = products.find(product => product.id === id);
        res.json({selectProduct: product});
    });
});

router.post('/add', function (req, res) {
    isAuth(req, res, () => {
        const maxId = Math.max.apply(Math, products.map(item => item.id));
        const newItem = {...req.body, id: maxId + 1, dateUp: new Date()};
        products.push(newItem);
        res.send();
    });
});

router.post('/update', function (req, res) {
    isAuth(req, res, () => {
        const index = products.findIndex(item => item.id === req.body.id);
        products[index] = req.body;
        res.send();
    });
});

router.delete('/delete/:id', function (req, res) {
    isAuth(req, res, () => {
        const id = +req.params.id;
        products = products.filter((item) => item.id !== id);
        res.send();
    });
});

module.exports = router;


