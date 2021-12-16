//deberas de utilizar faker para generar los datos
const faker = require('faker');
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

module.exports = {
    createShipment: function (req, res) {
        dogstatsd.increment('shipment.createShipment');
        //debera de simular un envio con dirección un precio y una persona con sus datos
        const name = faker.name.firstName()
        const lastName = faker.name.lastName()
        const address = `${faker.address.streetAddress(true)}, ${faker.address.zipCode()}, ${faker.address.city()}, ${faker.address.state()} ${faker.address.country()}`
        res
        .status(201)
        .json({
            'address': address,
            'price': faker.finance.amount(),
            'user': {
                'name': name,
                'lastName': lastName,
                'phone': faker.phone.phoneNumber(),
                'email': faker.internet.email(name, lastName, 'adsta.com')
            }
        });
    },
    changeStatus: function (req, res) {
        dogstatsd.increment('shipment.changeStatus');
        //Debera de retornar una dirección random
        const address = `${faker.address.streetAddress(true)}, ${faker.address.zipCode()}, ${faker.address.city()}, ${faker.address.state()} ${faker.address.country()}`
        // codigo de respuesta 201
        // data la direcciòn random
        res
            .status(201)
            .json({address: address})
    },
};
