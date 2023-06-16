'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('programs', [
            {
                image: 'https://i.ibb.co/0GYzPyr/pexels-tom-fisk-3186574.jpg',
                date: '9 - 30 juni 2023',
                organizer: 'Dumbmen',
                title: 'Stop Penggunaan Plastik',
                description: 'dorong pemerintah dan korporasi untuk menekankan penggunaan plastik sekali pakai dan berhenti mencemari lingkungan...',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/5rHx9sJ/alex-holzreiter-GT1-M5-LSPIA-unsplash.jpg',
                date: '8 - 28 juni 2023',
                organizer: 'Patrick',
                title: 'Wujudkan Laut Sehat',
                description: 'laut yang terindungi dari ancaman kerusakan dan perbudakan adalah sumber kehidupan bagi kita, nelayan serta hewan...',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/hszjkqB/Top-ten-books-on-the-climate-change-movement.jpg',
                date: '7 - 26 juni 2023',
                organizer: 'Avatar',
                title: 'Lindungi Hutan',
                description: 'Kebakaran hutan tidak hanya mengancam kehidupan manusia, tetapi juga mengancam satwa liar asli Indonesia.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/1sW9Hpy/How-To-Do-Your-Bit-To-Stop-Plastic-Pollution.jpg',
                date: '6 - 24 juni 2023',
                organizer: 'KungLou',
                title: 'Kurangi Produksi Plastik !!!',
                description: 'Ayo minta produsen untuk menunjukan rasa tanggung jawab dalam pengurangan kemasan plastik.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/NFt9pcC/tnc-88718086.jpg',
                date: '4 - 22 juni 2023',
                organizer: 'Woody',
                title: 'Kita Bersama Hutan Riau',
                description: 'Saat ini hutan Riau beserta isinaya sedang dalam ancaman produsen sawit. Kami butuh anda untuk melindungi hutan alami.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/Fm9YDyp/Another-Forest-Fire-Image.jpg',
                date: '2 - 20 juni 2023',
                organizer: 'Krishna',
                title: 'Stop kebakaran hutan',
                description: 'Kami mencari individu yang peduli terhadap lingkungan dan memiliki semangat untuk melindungi kekayaan alam kita.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // tambahkan data lainnya jika diperlukan
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('programs', null, {});
    }
};