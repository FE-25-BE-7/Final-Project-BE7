const artikel = require('../models').artikel

module.exports = {

    //Melihat semua user
    getAllArtikel: async(req, res) => {
        try {
            const artikels = await artikel.findAll();
            const response = {
                status: "SUCCESS",
                message: "Get All Artikel",
                meta: {
                    total: artikels.length
                },
                data: artikels
            };

            res.status(200).json(response);
        } catch (error) {
            console.error("Error occurred:", error);
            res.status(500).json({
                status: "ERROR",
                message: "Internal Server Error"
            });
        }

        res.status(200).json(response)
        return
    },

    getDetailArtikel: async(req, res) => {
        let response = {}
        const artikels = await artikel.findAll({
            where: {
                id: req.body.id
            }
        });
    
        if (artikels.length == 0) {
            response = {
                status: "SUCCESS",
                message: "Data not Found"
            }
        } else {
            response = {
                status: "SUCCESS",
                message: "Get Detail Artikel",
                data: artikels
            }

        }
    
        res.status(200).json(response)
        return
    },

    createArtikel: async(req, res) => {
        let response = {}
        let code = 200
        if (req.body.author == "" || req.body.author == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "author cannot be blank"
            }
        }
        if (req.body.title == "" || req.body.title == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "title cannot be blank"
            }
        }
        if (req.body.image == "" || req.body.image == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "image cannot be blank"
            }
        }
        if (req.body.description == "" || req.body.description == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "description cannot be blank"
            }
        }
        if (req.body.one == "" || req.body.one == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "one cannot be blank"
            }
        }
        if (req.body.two == "" || req.body.two == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "two cannot be blank"
            }
        }
        if (req.body.three == "" || req.body.three == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "three cannot be blank"
            }
        }
        if (req.body.four == "" || req.body.four == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "four cannot be blank"
            }
        }
        if (req.body.five == "" || req.body.five == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "five cannot be blank"
            }
        }
        if (req.body.six == "" || req.body.six == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "six cannot be blank"
            }
        }
        try {
            const newArtikel = await artikel.create({
                author: req.body.author,
                title: req.body.title,
                image: req.body.image,
                description: req.body.description
            });
    
            response = {
                status: "SUCCESS",
                message: "Create Artikel",
                data: newArtikel
            }
        } catch (error) {
            console.log(error)
            code = 422
            response = {
                status: "ERROR",
                message: error.parent.sqlMessage
            }
        }
    
        res.status(code).json(response)
        return
    },

    updateArtikel: async(req, res) => {
        let response = {}
        let code = 200
        if (req.body.author == "" || req.body.author == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "author cannot be blank"
            }
        }
        if (req.body.title == "" || req.body.title == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "title cannot be blank"
            }
        }
        if (req.body.image == "" || req.body.image == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "image cannot be blank"
            }
        }
        if (req.body.description == "" || req.body.description == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "description cannot be blank"
            }
        }
    
        const artikels = await artikel.findOne({
            where: {
                id: req.params.id
            }
        });
    
        if (!artikels) {
            response = {
                status: "SUCCESS",
                message: "Data not Found"
            }
        } else {
            artikels.author = req.body.author,
            artikels.title = req.body.title,
            artikels.image = req.body.image,
            artikels.description = req.body.description
            artikels.save()
            response = {
                status: "SUCCESS",
                message: "Update Artikel",
                data: artikels
            }
        }
    
        res.status(code).json(response)
        return
    },

    deleteAllArtikel: async(req, res) => {
        let response = {}
        let code = 200
        try {
            const artikels = await artikel.destroy({
                where: {},
                truncate: true
            });
    
            response = {
                status: "SUCCESS",
                message: "Delete Artikel All",
                data: artikels
            }
        } catch (error) {
            code = 422
            response = {
                status: "ERROR",
                message: error.parent.sqlMessage
            }
        }

        res.status(code).json(response)
        return
    },
    
    deleteArtikel: async (req, res) => {
        let response = {}
        let code = 200
        try {
            const artikels = await artikel.destroy({
                where: {
                    id: req.params.id
                }
            });

            response = {
                status: "SUCCESS",
                message: "Delete Artikel"
            }
        } catch (error) {
            code = 422
            response = {
                status: "ERROR",
                message: error.parent.sqlMessage
            }
        }

        res.status(code).json(response)
        return
    }
}