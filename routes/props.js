var express = require('express');
var router = express.Router();
const {isAuth, responsePageData} = require('../utils');
const Data = require('../data');
let props = new Data().getProps();


router.post('/', function (req, res) {
    isAuth(req, res,() => responsePageData(props, req, res));
});

router.post('/add', function (req, res) {
    isAuth(req, res, () => {
        const maxId = Math.max.apply(Math, props.map(item => item.id));
        const newItem = {id: maxId + 1, ...req.body};
        props.push(newItem);
        res.send();
    });
});

router.delete('/delete/:id', function (req, res) {
    isAuth(req, res, () => {
        const id = +req.params.id;
        props = props.filter((item) => item.id !== id);
        res.send();
    });
});

module.exports = router;