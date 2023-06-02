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
        let response = {}
        let code = 200
        try {
            const newUsers = await User.destroy({
                where: {
                    id: req.params.id
                }
            });

            response = {
                status: "SUCCESS",
                message: "Delete Todolist",
                data: newUsers
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