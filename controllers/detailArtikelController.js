const detail_artikel = require('../models').detail_artikel

module.exports = {

    //Melihat semua user
    getAllDetailArtikel: async (req, res) => {

        const detail_artikels = await detail_artikel.findAll();
        const response = {
            status: "SUCCESS",
            message: "Get All Artikel",
            meta: {
                total: detail_artikels.length
            },
            data: detail_artikels
        }
    
        res.status(200).json(response)
        return
    },

    getDetailArtikelById: async (req, res) => {
        let response = {}
        const detail_artikels = await detail_artikel.findAll({
            where: {
                id: req.params.id
            }
        });
    
        if (detail_artikels.length == 0) {
            response = {
                status: "SUCCESS",
                message: "Data not Found"
            }
        } else {
            response = {
                status: "SUCCESS",
                message: "Get Detail Artikel",
                data: detail_artikels
            }
        }
    
        res.status(200).json(response)
        return
    },

}