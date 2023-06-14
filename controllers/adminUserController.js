const user = require('../models').user

module.exports = {

    // melihat user saja
    getAllUser: async(req, res) => {
        try {
            const users = await user.findAll();
            // Filter pengguna berdasarkan peran "user"
            const userRole = 'user';
            const filteredUsers = users.filter(user => user.role === userRole);

            res.status(200).json(filteredUsers);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    },

    //delete
    deleteUser: async(req, res) => {
        try {
            const users = await user.findByPk(req.body.id);

            if (!users) {
                return res.send('User not found');
            } else {
                await users.destroy({ where: { id: req.body.id } });
                return res.send('User deleted');
            }
        } catch (error) {
            return res.json(error);
        }
    },

}