const bcrypt = require('bcrypt');
const User = require('../models').User
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports = {
    // registerrr
    registerUser: async(req, res) => {
        let response = {};
        let code = 200;

        if (req.body.email == "" || req.body.email == undefined) {
            code = 422;
            response = {
                status: "SUCCESS",
                message: "email cannot be blank",
            };
        } else if (req.body.password == "" || req.body.password == undefined) {
            code = 422;
            response = {
                status: "SUCCESS",
                message: "password cannot be blank",
            };
        } else {
            try {
                const newUser = await User.create({
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role,
                });

                response = {
                    status: "SUCCESS",
                    message: "Create User",
                    data: newUser,
                };
            } catch (error) {
                console.log(error)
                code = 422;
                response = {
                    status: "ERROR",

                };
            }
        }

        res.status(code).json(response);
    },
    // Login all user

    login: async(req, res) => {
        try {
            const { email, password } = req.body;
            const Users = await User.findOne({ where: { email } });
            if (!Users) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            // Membandingkan password
            if (Users.password !== password) {
                code = 401;
                response = {
                    status: "ERROR",
                    message: "Invalid email or password"
                };
                res.status(code).json(response);
                return;
            }
            // Menghasilkan token dengan email pengguna
            const token = jwt.sign({ email: Users.email }, process.env.TOKEN_SECRET, {
                expiresIn: "1h",
            });

            // Merespon permintaan klien dengan pesan sukses login dan token akses
            res.status(200).json({
                message: "Login Successful",
                accessToken: token,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: err.message || "Internal Server Error",
            });
        }
    },

}