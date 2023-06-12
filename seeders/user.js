'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [{
                role: 'admin',
                username: 'john_doe',
                email: 'john@example.com',
                password: 'password123',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                role: 'user',
                username: 'jane_smith',
                email: 'jane@example.com',
                password: 'password456',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // tambahkan data lainnya jika diperlukan
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};