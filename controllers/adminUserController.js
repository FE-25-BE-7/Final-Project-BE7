const User = require('../models').User

module.exports = {

    // melihat user saja
    getAllUser: async(req, res) => {
        try {
            const Users = await User.findAll();
            // Filter pengguna berdasarkan peran "user"
            const userRole = 'user';
            const filteredUsers = Users.filter(user => user.role === userRole);

            res.status(200).json(filteredUsers);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    //delete
    deleteUser: async(req, res) => {
        try {
            const Users = await User.findByPk(req.body.id);

            if (!Users) {
                return res.send('User not found');
            } else {
                await Users.destroy({ where: { id: req.body.id } });
                return res.send('User deleted');
            }
        } catch (error) {
            return res.json(error);
        }
    },



}