const { sequelize, Donasi, transaction, Donasis } = require('../models');
const midtransClient = require('midtrans-client');

const bodyParser = require('body-parser');
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-owqp3Dn3Ri5eRZdVikXXbsMU",
    clientKey: "SB-Mid-client-eAQfQ7RgTgaKXqeN",

});

module.exports = {

    donasiGet: async(req, res, next) => {
        try {
            // Mengambil semua data donasi yang berhasil
            const donasi = await Donasi.findAll();

            // Mengirimkan data donasi ke client
            res.status(200).json(donasi);
        } catch (error) {
            // Menangani error jika terjadi
            console.log('Error occurred:', error);
            res.status(500).send({ error: error.message });
        }


    },



    //isi data req donasi token

    reqDonasi: (req, res) => {
        const { order_id, gross_amount, first_name, last_name, email, phone } = req.body;

        let parameter = {
            transaction_details: {
                order_id: order_id,
                gross_amount: gross_amount
            },
            credit_card: {
                secure: true
            },
            Donasi_details: {
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone: phone
            }
        };

        snap.createTransaction(parameter)
            .then((transaction) => {
                let transactionToken = transaction.token;
                console.log('Transaction Access Token:', transactionToken);

                sequelize.sync()
                    .then(() => {
                        return Donasi.create({
                            order_id: parameter.transaction_details.order_id,
                            gross_amount: parameter.transaction_details.gross_amount,
                            first_name: parameter.Donasi_details.first_name,
                            last_name: parameter.Donasi_details.last_name,
                            email: parameter.Donasi_details.email,
                            phone: parameter.Donasi_details.phone,
                            transaction_token: transactionToken
                        });
                    })
                    .then(() => {
                        console.log('Transaction saved to database');
                        res.send({ token: transactionToken });
                    })
                    .catch((error) => {
                        console.log('Error saving transaction to database:', error);
                        res.status(500).send({ error: error.message });
                    });
            })
            .catch((error) => {
                console.log('Error occurred:', error);
                res.status(500).send({ error: error.message });
            });
    }
}