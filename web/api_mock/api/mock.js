
let sensorsEnum = {
    humidity: 0,
    lighting: 1,
    movement: 2
}

let actuatorsEnum = {
    dieselEngine: 0,
    gasEngine: 1
}

let devices = [
    {
        id: "48-3F-0A-91-00-BC", name: "Детская комната", registred: new Date(2016, 11, 3), isActive: 1,
        sensors: [sensorsEnum.humidity, sensorsEnum.humidity, sensorsEnum.lighting, sensorsEnum.movement],
        actuators: [actuatorsEnum.dieselEngine, actuatorsEnum.gasEngine]
    },
    {
        id: "52-7F-8A-93-00-AC", name: "Гостинная", registred: new Date(2016, 9, 3), isActive: 1,
        sensors: [ sensorsEnum.lighting, sensorsEnum.movement],
        actuators: [actuatorsEnum.gasEngine]
    },
    {
        id: "81-7A-5F-51-00-CC", name: "Кухня", registred: new Date(2017, 1, 3), isActive: 0,
        sensors: [sensorsEnum.humidity, sensorsEnum.movement],
        actuators: [actuatorsEnum.dieselEngine, actuatorsEnum.gasEngine]
    },
    {
        id: "90-5B-0A-91-00-BC", name: "Спальня", registred: new Date(2017, 2, 7), isActive: 1,
        sensors: [ sensorsEnum.lighting, sensorsEnum.movement],
        actuators: [actuatorsEnum.dieselEngine]
    },
    {
        id: "84-AF-0A-7F-00-BC", name: "Балкон", registred: new Date(2017, 3, 8), isActive: 1,
        sensors: [sensorsEnum.humidity],
        actuators: []
    },
]


module.exports = {
    devices,
    sensorsEnum,
    actuatorsEnum
}