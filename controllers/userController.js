const bcrypt = require('bcrypt');
const user = require('../models').user
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

module.exports = {
    // registerrr
    registerUser: async(req, res) => {
        let response = {};
        let code = 200;

        if (req.body.username == "" || req.body.username == undefined) {
            code = 200;
            response = {
                status: "SUCCESS",
                message: "username cannot be blank",
            };
        } else if (req.body.password == "" || req.body.password == undefined) {
            code = 200;
            response = {
                status: "SUCCESS",
                message: "password cannot be blank",
            };
        } else {
            try {
                const newUser = await user.create({
                    username: req.body.username,
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
                code = 500;
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
            const { username, password } = req.body;
            const users = await user.findOne({ where: { username } });
            if (!users) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            // Membandingkan password
            if (users.password !== password) {
                code = 401;
                response = {
                    status: "ERROR",
                    message: "Invalid username or password"
                };
                res.status(code).json(response);
                return;
            }
            // Menghasilkan token dengan email pengguna
            const token = jwt.sign({ username: users.username }, process.env.TOKEN_SECRET, {
                expiresIn: "1h",
            });

            // Merespon permintaan klien dengan pesan sukses login dan token akses
            res.status(200).json({
                message: "Login Successful",
                accessToken: token,
                data: users,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: err.message || "Internal Server Error",
            });
        }
    },


}