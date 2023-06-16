'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('listPrograms', [
            {
                image_one: 'https://i.ibb.co/8P2Hh4y/donation-tree.jpg',
                image_two: 'https://i.ibb.co/hCBYQjC/d1.png',
                title: 'DONASI',
                sub_title: 'Bantu kami menjaga bumi kita',
                description: 'Mari membela lingkungan sepanjang hidupmu, bahkan lebih lama dari itu. Berdonasilah hari ini.',
                date: '8 - 10 Juli 2023',
                organizer: 'GreenPeace',
                link_name: 'Donasi Sekarang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image_one: 'https://i.ibb.co/2tfKX7S/volunteer-teamwork.jpg',
                image_two: 'https://i.ibb.co/GdDvCx5/v1.png',
                title: 'RELAWAN',
                sub_title: 'Mari bergabung menjadi relawan',
                description: 'Bumi kita membutuhkan suara dan aksimu untuk mencari solusi membuat perubahan nyata.',
                date: '22 - 24 Juli 2023',
                organizer: 'GreenPeace',
                link_name: 'Daftar Sekarang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // tambahkan data lainnya jika diperlukan
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('listPrograms', null, {});
    }
};