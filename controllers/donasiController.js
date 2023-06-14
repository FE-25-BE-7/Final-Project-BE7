const { sequelize, donasi, transaction, donasis } = require('../models');
const midtransClient = require('midtrans-client');
const { v4: uuidv4 } = require('uuid');
const uuid = require("uuid");

const bodyParser = require('body-parser');
const { or } = require('sequelize');
let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-owqp3Dn3Ri5eRZdVikXXbsMU",
    clientKey: "SB-Mid-client-eAQfQ7RgTgaKXqeN",

});

module.exports = {
    // nampilin user donasi
    donasiGet: async(req, res, next) => {
        try {
            // Mengambil semua data donasi yang berhasil
            const donasis = await donasi.findAll();

            // Mengirimkan data donasi ke client
            res.status(200).json(donasis);
        } catch (error) {
            // Menangani error jika terjadi
            console.log('Error occurred:', error);
            res.status(500).send({ error: error.message });
        }


    },
    //isi data req donasi token

    reqDonasi: (req, res) => {
        const { order_id, jml_Donasi, gross_amount, name, email, phone } = req.body;

        let parameter = {
            transaction_details: {
                order_id: uuid.v4(),
                gross_amount: gross_amount
            },
            credit_card: {
                secure: true
            },
            Donasi_details: {
                name: name,
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
                            name: parameter.Donasi_details.name,
                            email: parameter.Donasi_details.email,
                            phone: parameter.Donasi_details.phone,
                            transaction_token: transactionToken
                        });
                    })
                    .then((transaction) => {
                        console.log('Transaction Suksessss');
                        res.send({ token: transaction });
                    })
                    .catch((error) => {
                        console.log('Error :', error);
                        res.status(500).send({ error: error.message });
                    });
            })
            .catch((error) => {
                console.log('Error occurred:', error);
                res.status(500).send({ error: error.message });
            });
    }
}