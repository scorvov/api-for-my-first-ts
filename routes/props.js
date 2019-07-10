var express = require('express');
var router = express.Router();

var props = {
    propsList: [
        {
            id: 1,
            name: 'Цвет авто',
            type: 'dropdown'
        },
        {
            id: 2,
            name: 'Год выпуска',
            type: 'number'
        },
        {
            id: 3,
            name: 'Тип топлива',
            type: 'string'
        }
    ]
};

router.post('/', function(req, res) {
    res.json({propsList}=props);
});

router.post('/add', function(req, res) {
    const maxId = Math.max.apply(Math, props.propsList.map(item => item.id));
    const newItem = {id: maxId + 1, ...req.body};
    props.propsList.push(newItem);
    res.send();
});

router.delete('/delete/:id', function(req, res) {
    const id = + req.params.id;
    props.propsList = props.propsList.filter((item) => item.id !== id);
    res.send();
});

module.exports = router;