var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/devices', (req, res, next) => {

    var limit = Number(req.query.limit) || mocks.devices.length,
        offset = Number(req.query.offset) || 0;

    setTimeout(() => {
        res.json(mocks.devices
            .slice(offset, limit + offset)
            .map(item => { return { id: item.id, name: item.name, registred: item.registred, isActive: item.isActive } }));
    }, 2000);

});

router.post("/devices/register", (req, res, next) => {

    let body = req.body;

    if (!body.name) {
        res.status(400).json({ error: "NameIsRequired" });
    } else {
        
        let maxId = mocks.getMaxDeviceId()
        
        let device = {
            id: ++maxId,
            name: body.name,
            mac: body.mac,
            registred: Date.now(),
            isActive: 1,
            sensors: body.sensors,
            actuators: body.actuators
        }

        mocks.devices.push(device);
        res.json(device);
    }
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