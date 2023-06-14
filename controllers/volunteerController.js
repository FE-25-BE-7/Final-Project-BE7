const volunteer = require('../models').volunteer

module.exports = {

    //Melihat semua user
    getAllVolunteer: async(req, res) => {

        const volunteers = await volunteer.findAll();
        const response = {
            status: "SUCCESS",
            message: "Get All Volunteer",
            meta: {
                total: volunteers.length
            },
            data: volunteers
        }

        res.status(200).json(response)
        return
    },

    getDetailVolunteer: async(req, res) => {
        let response = {}
        const volunteers = await volunteer.findAll({
            where: {
                id: req.params.id
            }
        });

        if (volunteers.length == 0) {
            response = {
                status: "SUCCESS",
                message: "Data not Found"
            }
        } else {
            response = {
                status: "SUCCESS",
                message: "Get Detail Volunteer",
                data: volunteers
            }
        }

        res.status(200).json(response)
        return
    },

    daftarVolunteer: async(req, res) => {
        let response = {}
        let code = 200
        if (req.body.user_id == "" || req.body.user_id == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "User ID cannot be blank"
            }
        }
        if (req.body.program_id == "" || req.body.program_id == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "Program ID cannot be blank"
            }
        }
        if (req.body.fullName == "" || req.body.fullName == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "Full name cannot be blank"
            }
        }
        if (req.body.email == "" || req.body.email == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "Email cannot be blank"
            }
        }
        if (req.body.phoneNumber == "" || req.body.phoneNumber == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "Phone number cannot be blank"
            }
        }
        if (req.body.age == "" || req.body.age == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "Age cannot be blank"
            }
        }
        if (req.body.address == "" || req.body.address == undefined) {
            code = 422
            response = {
                status: "SUCCESS",
                message: "Address cannot be blank"
            }
        }

        try {
            const newVolunteer = await volunteer.create({
                organizer: req.body.organizer,
                user_id: req.body.user_id,
                program_id: req.body.program_id,
                fullName: req.body.fullName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                age: req.body.age,
                address: req.body.address
            });

            response = {
                status: "SUCCESS",
                message: "Create Artikel",
                data: newVolunteer
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
}