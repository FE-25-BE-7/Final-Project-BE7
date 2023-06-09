const Donasi = require('../models').Donasi

const midtransClient = require('midtrans-client');


let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "SB-Mid-server-owqp3Dn3Ri5eRZdVikXXbsMU",
    clientKey: "SB-Mid-client-eAQfQ7RgTgaKXqeN",

});

module.exports = {

    donasiGet: async(req, res, next) => {
        Donasi.findAll().then(data => {
            var tampilData = data.map(item => {
                return {
                    // id: donasis.id,
                    // username: Users.username,
                    // keterangan: donasis.keterangan,
                    // username:donasi
                    response_midtrans: JSON.parse(item.response_midtrans),
                    createdAt: Donasi.createdAt,
                    updatedAt: Donasi.updatedAt
                }
            });
            res.json({
                status: true,
                pesan: "Berhasil Tampil",
                data: tampilData
            });
        }).catch(err => {

            res.json({
                status: false,
                pesan: "Gagal tampil: " + err.message,
                data: []
            });
        });


    },



    //isi data req donasi token

    reqDonasi: async(req, res, next) => {
        let parameter = {
            "transaction_details": {
                "order_id": "YOUR-ORDERID-123456",
                "gross_amount": 1000000
            },
            "credit_card": {
                "secure": true
            },
            "customer_details": {
                "first_name": "ilham",
                "last_name": "lancar",
                "email": "ilham@gmail.com",
                "phone": "088233459375"
            }
        };

        snap.createTransaction(parameter)
            .then((transaction) => {
                // transaction token
                let transactionToken = transaction.token;
                console.log('Transaction Aksess Token:', transactionToken);

                // Mengirimkan response dengan token ke Postman
                res.send({ token: transactionToken });
            })
            .catch((error) => {
                console.log('Error occurred:', error);
                // Mengirimkan response error ke Postman
                res.status(500).send({ error: error.message });
            });

    }
}