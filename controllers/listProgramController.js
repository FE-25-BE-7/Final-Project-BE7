const ListProgram = require('../models').listProgram;

module.exports = {
    getPrograms: async(req, res) => {
        try {
            // Mengambil semua data donasi yang berhasil
            const programs = await ListProgram.findAll();

            // Mengirimkan data donasi ke client
            res.status(200).json(programs);
        } catch (error) {
            // Menangani error jika terjadi
            console.log('Error occurred:', error);
            res.status(500).send({ error: error.message });
        }
    },
    // add list
    addList: async(req, res) => {
        try {
            const { id, image_one, image_two, title, sub_title, description, date, organizer, link_name } = req.body;

            const newProgram = {
                id,
                image_one,
                image_two,
                title,
                sub_title,
                description,
                date,
                organizer,
                link_name,
            };

            // Simpan data program baru ke dalam database
            const createdProgram = await ListProgram.create(newProgram);

            res.status(201).json(createdProgram);
        } catch (error) {
            console.error('Error creating program:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }


};