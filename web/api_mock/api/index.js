var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/devices', function (req, res, next) {

    var limit = Number(req.query.limit) || mocks.devices.length,
        offset = Number(req.query.offset) || 0;

    setTimeout(() => {
        res.json(mocks.devices
                        .slice(offset, limit + offset)
                        .map(item => { return { id: item.id, name: item.name, registred: item.registred, isActive: item.isActive } }));
    }, 2000);
    
});

router.get("/devices/:id", (req, res, next) => {

    let device = mocks.devices.filter(item => item.id == req.params.id)[0];

    if (device) {
        setTimeout(() => {
            res.json(device);
        }, 2000);
    } else {
        res.status(404).json({ error: "not found" });
    }    

});

router.get("/sensors", (req, res, next) => {
    res.json(Object.keys(mocks.sensorsEnum).map(key => { return { name: key, value: mocks.sensorsEnum[key] } }));
});

router.get("/actuators", (req, res, next) => {
    res.json(Object.keys(mocks.actuatorsEnum).map(key => { return { name: key, value: mocks.actuatorsEnum[key] } }));
});


module.exports = router;