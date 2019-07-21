var express = require('express');
var router = express.Router();


let user = {
    userId: 'qwerty2301',
    login: 'Scorpio'
};

router.post('/', function (req, res) {
    if(req.body.login === "Scorpio" && req.body.password === "20111990"){
        res.cookie('user', user);
        res.json(user);
    } else res.status(401).send('Current login or password does not match');
});
router.get('/getuser', function (req, res) {
    res.send(JSON.parse(req.cookie));
});

router.get('/logout', (req, res)=>{
    res.clearCookie('userId');
    res.send('user logout successfully');
});

module.exports = router;


