const program = require('../models').program
module.exports = {
    getPrograms: async(req, res) => {
        try {
            const programs = [{
                    image_one: 'https://i.ibb.co/8P2Hh4y/donation-tree.jpg',
                    image_two: 'https://i.ibb.co/hCBYQjC/d1.png',
                    title: 'DONASI',
                    sub_title: 'Bantu kami menjaga bumi kita',
                    description: 'Mari membela lingkungan sepanjang hidupmu, bahkan lebih lama dari itu. Berdonasilah hari ini.',
                    date: '8 - 10 Juli 2023',
                    organizer: 'GreenPeace',
                    link_name: 'Donasi Sekarang',
                    id: '1',
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
                    id: '2',
                },
            ];
            res.json(programs);
        } catch (error) {
            console.error('Error getting programs:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },


    addList: async(req, res) => {
        try {
            const { image_one, image_two, title, sub_title, description, date, organizer, link_name, id } = req.body;

            const newProgram = {
                image_one,
                image_two,
                title,
                sub_title,
                description,
                date,
                organizer,
                link_name,
                id,
            };

            // Simpan atau lakukan operasi lain dengan data program yang diterima

            res.json(newProgram);
        } catch (error) {
            console.error('Error creating program:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}