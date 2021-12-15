const PAYMENT_FILE_PATH = './payment-generated.txt';
const faker = require('faker');
const fs = require('fs');
const LINE_ENDING = require('os').EOL;
const os = require('os')
const utils = require('../test/utils');

module.exports = {
    create: function (req, res) {
        try {
            const fd = fs.openSync(PAYMENT_FILE_PATH, 'a');
            fs.appendFileSync(fd, faker.commerce.price() + LINE_ENDING, 'utf8');
            re
                .status(201)
                .json({
                    'message': 'created! 😉'
                })
        } catch (error) {
            res
                .status(500)
                .json({
                    'message': 'something was wrong! 😢',
                    'error': error
                })
        }
    },

    applyDiscount: async function (req, res) {
        //debera de restar una cantidad a cada precio en payment-generated.txt
        try {
            const discount = parseFloat(req.body.discount)
            // const fd = fs.openSync(PAYMENT_FILE_PATH, 'a');
            const result = await utils.readFile(PAYMENT_FILE_PATH)
            const splitResult = result.split(os.EOL)
            let newText = ''
            if (discount) {
                splitResult.forEach(num => {
                    const numx = parseFloat(num)
                    if (!isNaN(numx)) {
                        const discounted = numx - discount
                        if (!isNaN(numx)) newText += `${discounted > 0 ? discounted : 0}${os.EOL}`
                        else newText += !num.includes('/') ? num : ''
                    }
                });
                if (newText !== '') utils.generatePaymentFile(newText)
            }
            res
                .status(201)
                .json({
                    'oldContent': result,
                    'newContent': newText
                })
        } catch (error) {
            console.error(error)
            res.json({
                'message': 'something was wrong! 😢',
                'error': error
            })
        }
        /* finally {
            await utils.removeFile(PAYMENT_FILE_PATH)
        } */
    },

    getPromos: function (req, res) {
        // req to res
        res
            .status(201)
            .json([
                { name: "BUENFIN" },
                { name: "HOTSALE" },
                { name: "CYBERMONDAY" },
                { name: "BLACKFRIDAY" },
                { name: "PRIMEDAY" },
            ]);
    }
};
