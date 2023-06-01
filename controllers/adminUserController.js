const User = require('../models').User
module.exports = {
    //melihat all users
    getAllUser: async(req, res) => {
        try {

            const Users = await User.findAll();
            res.status(200).json(Users);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error.message });
        }
    }
}