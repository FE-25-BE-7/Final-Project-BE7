const program = require('../models').program

module.exports = {

    //Melihat semua user
    getAllProgram: async (req, res) => {

        const programs = await program.findAll();
        const response = {
            status: "SUCCESS",
            message: "Get All Program",
            meta: {
                total: programs.length
            },
            data: programs
        }
    
        res.status(200).json(response)
        return
    },

    getDetailProgram: async (req, res) => {
        let response = {}
        const programs = await program.findAll({
            where: {
                id: req.params.id
            }
        });
    
        if (programs.length == 0) {
            response = {
                status: "SUCCESS",
                message: "Data not Found"
            }
        } else {
            response = {
                status: "SUCCESS",
                message: "Get Detail Program",
                data: programs
            }
        }
    
        res.status(200).json(response)
        return
    },

    createProgram: async (req, res) => {
        let response = {}
        let code = 200
        if (req.body.organizer == "" || req.body.organizer == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "organizer cannot be blank"
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
        if (req.body.date == "" || req.body.date == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "date cannot be blank"
            }
        }
        if (req.body.kuota == "" || req.body.kuota == undefined) {
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

        try {
            const newProgram = await program.create({
                organizer: req.body.organizer,
                title: req.body.title,
                image: req.body.image,
                date: req.body.date,
                kuota: req.body.kuota,
                description: req.body.description
            });
    
            response = {
                status: "SUCCESS",
                message: "Create Program",
                data: newProgram
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

    updateProgram: async (req, res) => {
        let response = {}
        let code = 200
        if (req.body.organizer == "" || req.body.organizer == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "organizer cannot be blank"
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
        if (req.body.date == "" || req.body.date == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "date cannot be blank"
            }
        }
        if (req.body.kuota == "" || req.body.kuota == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "kuota cannot be blank"
            }
        }
        if (req.body.description == "" || req.body.description == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "description cannot be blank"
            }
        }
    
        const programs = await program.findOne({
            where: {
                id: req.params.id
            }
        });
    
        if (!program) {
            response = {
                status: "SUCCESS",
                message: "Data not Found"
            }
        } else {
            programs.organizer = req.body.organizer,
            programs.title = req.body.title,
            programs.image = req.body.image,
            programs.date = req.body.date,
            programs.kuota = req.body.kuota,
            programs.description = req.body.description
            programs.save()
            response = {
                status: "SUCCESS",
                message: "Update Program",
                data: programs
            }
        }
    
        res.status(code).json(response)
        return
    },

    deleteAllProgram: async (req, res) => {
        let response = {}
        let code = 200
        try {
            const programs = await program.destroy({
                where: {},
                truncate: true
            });
    
            response = {
                status: "SUCCESS",
                message: "Delete Program All",
                data: programs
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
    
    deleteProgram: async (req, res) => {
        let response = {}
        let code = 200
        try {
            const programs = await program.destroy({
                where: {
                    id: req.params.id
                }
            });
    
            response = {
                status: "SUCCESS",
                message: "Delete Program",
                data: programs
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