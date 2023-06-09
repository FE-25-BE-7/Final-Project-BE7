const { sequelize, Donasi, transaction, Donasis } = require('../models');
const midtransClient = require('midtrans-client');


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

    reqDonasi: async(req, res, next) => {
        let parameter = {
            "transaction_details": {
                "order_id": "YOUR-ORDERID-123456",
                "gross_amount": 600000
            },
            "credit_card": {
                "secure": true
            },
            "customer_details": {
                "first_name": "akbar",
                "last_name": "lancar",
                "email": "akbar@gmail.com",
                "phone": "088233459375"
            }
        };
        // Donasi Snap
        snap.createTransaction(parameter)
            .then((transaction) => {
                let transactionToken = transaction.token;
                console.log('Transaction Access Token:', transactionToken);

                sequelize.sync() // Mengecek dan membuat tabel jika belum ada
                    .then(() => {
                        return Donasi.create({
                            order_id: parameter.transaction_details.order_id,
                            gross_amount: parameter.transaction_details.gross_amount,
                            customer_first_name: parameter.customer_details.first_name,
                            customer_last_name: parameter.customer_details.last_name,
                            customer_email: parameter.customer_details.email,
                            customer_phone: parameter.customer_details.phone,
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