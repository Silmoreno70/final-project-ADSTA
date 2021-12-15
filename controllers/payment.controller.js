const PAYMENT_FILE_PATH = './payment-generated.txt';
const faker = require('faker');
const fs = require('fs');
const LINE_ENDING = require('os').EOL;

module.exports = {
    create: function (req, res) {
        const fd = fs.openSync(PAYMENT_FILE_PATH, 'a');
        const fakeNum = faker.commerce.price()
        fs.appendFileSync(fd, faker.commerce.price() + LINE_ENDING, 'utf8');
        res.status(201).send();
    },

    applyDiscount: function (req, res) {
        //debera de restar una cantidad a cada precio en payment-generated.txt
        // const discount = res.body.discount
        const fd = fs.openSync(PAYMENT_FILE_PATH, 'a');
        const content = fs.readFileSync(fd, 'utf-8')
        res.json({ message: content});
    },

    getPromos: function (req, res) {
        // req to res
        res.json([
            {name: "BUENFIN"},
            {name: "HOTSALE"},
            {name: "CYBERMONDAY"},
            {name: "BLACKFRIDAY"},
            {name: "PRIMEDAY"},
        ]);
    }
};
