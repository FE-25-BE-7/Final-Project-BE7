'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('artikels', [
            {
                image: 'https://i.ibb.co/zm9PHXx/article2.jpg',
                date: '28 Maret 2023',
                author: 'Wahyudi',
                title: 'Transportasi Berkeadilan, Juru(s) Selamat Mobilitas Masyarakat Kita',
                description: 'Transportasi umum adalah kebutuhan dasar  masyarakat dan diwujudkan oleh pemerintah dari hasil memungut pajak masyarakatnya...',
                one: 'Membangun sistem transportasi publik bukan sekedar bangun infrastruktur, gunting pita, panggil media, lalu voilà! Jadi deh! Lebih dari itu transportasi publik adalah membangun sistem, membangun kultur, dan kesadaran jangka panjang masyarakatnya sendiri tentang mobilitas transportasi.',
                two: 'Terlebih masyarakat kita yang sedari dulu dijejali dengan transportasi yang bersifat pribadi sehingga perlahan melupakan apa itu transportasi publik. Padahal sudah ada Undang-Undang nomor 22 tahun 2009 tentang lalu lintas dan angkutan jalan yang berbunyi:',
                three: '“Pemerintah wajib menyelenggarakan dan menyediakan pelayanan angkutan umum yang aman, nyaman, selamat dan terjangkau bagi masyarakat…”',
                four: 'Namun kenyataannya di lapangan pemerintah malah memiliki intervensi yang terbatas dalam sistem transportasi publik itu sendiri. Pemerintah – baik pusat maupun daerah – berlomba-lomba menyediakan infrastruktur transportasi yang fokus pada desain yang megah dan bisa diingat publik sebagai ikon atau lanskap dari suatu daerah. Hal ini tentu lebih mementingkan sisi politis ketimbang memprioritaskan kita, masyarakat umum, sebagai end user-nya.',
                five: 'Transportasi umum adalah kebutuhan dasar  masyarakat dan diwujudkan oleh pemerintah dari hasil memungut pajak masyarakatnya. Pemerintah pun sadar akan hal ini dan dalam beberapa waktu belakangan mulai melirik isu transportasi publik. Namun sayangnya, banyak proyek pemerintah dalam hal transportasi publik yang dirasa masih tidak tepat sasaran. Proyek kereta cepat dengan segala polemiknya, kekacauan stasiun Manggarai, dan megahnya halte-halte bus di Jakarta bak bahtera Titanic, hanya sebagian kecil bukti bahwa pemerintah kita tidak melihat manusia sebagai end user-nya, melainkan hanya sebagai proyek infrastruktur saja.',
                six: 'Tentu mindset ini perlu dibenahi. Untuk itu gerakan Transportasi Berkeadilan dan Berkelanjutan perlu digaungkan dalam mewujudkan hal ini. Tidak hanya di mindset pemerintahnya sendiri sebagai regulator, namun di masyarakat luas tadi sebagai end user-nya. Untuk itulah podcast ini dibuat sebagai jembatan pengetahuan dan pemantik kesadaran bahwa Transportasi Berkeadilan itu ada dan merupakan solusi nyata dalam jangka panjang bagi mobilitas kita semua.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/jzKbkn7/article3.jpg',
                date: '22 Maret 2023',
                author: 'Greenpeace',
                title: 'IPCC Ungkap Krisis Iklim Makin Nyata, Aksi Iklim Ambisius Dibutuhkan Sekarang',
                description: 'Kenaikan suhu Bumi bisa menuju angka 2.8°C pada 2100, melebihi batas aman pemanasan global. Aksi iklim yang ambisius dibutuhkan sekarang juga...',
                one: 'Jakarta, 22 Maret 2023. Panel Antarpemerintah untuk Perubahan Iklim Perserikatan Bangsa-Bangsa (IPCC) merilis laporan teranyar mengenai situasi iklim terkini pada Senin, 20 Maret 2023. Dalam AR6 Synthesis Report ini, IPCC menyatakan bahwa krisis iklim yang disebabkan oleh manusia (human-caused climate change) telah terjadi secara cepat serta meningkatkan intensitas dan frekuensi terjadinya cuaca ekstrem di setiap wilayah dunia, di antaranya gelombang panas yang semakin intens, hujan lebat, kekeringan, hingga siklon tropis.',
                two: 'Saat ini, kenaikan temperatur Bumi telah mencapai 1,1°C dan menuju kenaikan temperatur global rata-rata 2,8°C di tahun 2100, berdasarkan komitmen negara-negara di dalam Nationally Determined Contributions (NDC). Angka ini hampir dua kali lipat dari target 1,5°C yang tertuang dalam Paris Agreement, yaitu batas aman bagi Bumi untuk pemanasan global',
                three: '“Hal ini menandakan bahwa upaya yang dilakukan oleh negara-negara belum cukup dan akan membawa dunia menuju climate catastrophe yang lebih parah,” kata Adila Isfandiari, Juru Kampanye Iklim dan Energi Greenpeace Indonesia.',
                four: 'Laporan AR6 Synthesis Report ini adalah bagian final dari rangkaian Sixth Assessment Report yang mengintegrasikan temuan dari enam laporan sebelumnya, yang telah dikeluarkan IPCC sejak 2018. IPCC sudah mengungkap banyak analisis mengenai situasi krisis iklim yang sedang dan akan melanda dunia. Mereka juga memperingatkan pemerintah negara-negara untuk melakukan aksi iklim yang lebih nyata dan ambisius, demi menghindarkan kita dari situasi yang lebih buruk lagi.',
                five: 'Situasi ini mengancam Indonesia sebagai salah satu negara yang sangat rentan terhadap krisis iklim, terutama bencana banjir dan panas ekstrem. Selama 2022, Indonesia telah mengalami 3.544 bencana, sekitar 90 persen di antaranya bencana hidrometeorologi. Adapun menurut Badan Meteorologi, Klimatologi, dan Geofisika (BMKG), tren bencana hidrometeorologi Indonesia telah mengalami peningkatan selama 40 tahun terakhir. Bank Indonesia menganalisis, kerugian ekonomi akibat cuaca ekstrem mencapai lebih dari Rp100 triliun per tahun.',
                six: 'Namun di sisi lain, AR6 Synthesis Report juga menyatakan masih mungkin untuk mencapai target 1,5°C di tahun 2100, dengan melakukan segala upaya mitigasi yang ambisius untuk mengurangi emisi sebesar 50 persen pada 2030 dan mencapai nol emisi tahun 2050. “Bukti-bukti ilmiah menunjukkan krisis iklim itu nyata dan dampaknya semakin masif. Kita masih berada jauh dari jalur mencapai 1,5°C, tapi masih ada peluang jika kita melakukan aksi iklim yang ambisius, di antaranya dengan percepatan transisi energi,” kata Adila.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/Qbn1hmS/article1.jpg',
                date: '17 Maret 2023',
                author: 'Ridwan Dimas',
                title: 'Festival Suara Jernih Papua, Memahami dan Menyuarakan Papua Lewat Seni dan Budaya',
                description: 'Jakarta, 17 Maret 2023. Greenpeace berkolaborasi dengan Papua Itu Kita–forum solidaritas Papua yang berfokus pada HAM serta pusat informasi...',
                one: 'Jakarta, 17 Maret 2023. Greenpeace berkolaborasi dengan Papua Itu Kita–forum solidaritas Papua yang berfokus pada HAM serta pusat informasi dan kajian–menggelar Festival Ranipa – Suara Jernih Papua. Acara ini bertujuan memperkenalkan kepada masyarakat, khususnya masyarakat perkotaan, mengenai kekayaan alam serta keanekaragaman hayati Tanah Papua yang bersatu padu dengan kearifan lokal budaya masyarakat adatnya.',
                two: 'Festival ini menghadirkan rangkaian acara seperti diskusi publik, instalasi seni dan foto, tari tradisional, MOP Papua, serta pertunjukan musik. Melalui berbagai rangkaian acara ini, pengunjung dapat merasakan pengalaman memahami dan menjelajahi keindahan serta kekayaan alam dan budaya di Papua. Charles Toto, chef asal Papua yang mengkampanyekan perlindungan lingkungan melalui kuliner lokal  juga turut hadir dalam acara ini.',
                three: 'Kehidupan masyarakat adat Papua sangat erat dengan sumber daya alam yang dikelola dengan kearifan, dan diwariskan dari generasi ke generasi untuk memenuhi kebutuhan harian, mulai dari bahan pangan hingga ragam kerajinan. Namun, ekspansi industri perkebunan monokultur seperti sawit serta pembangunan masif yang tidak bertanggung jawab telah mengancam masyarakat adat Papua dan budaya mereka.',
                four: 'Analisis Greenpeace menyebut lebih dari 20% daratan Tanah Papua telah dibebani perizinan industri ekstraktif berbasis lahan, seperti pertambangan, hutan tanaman industri (HTI), hak pengusahaan hutan (HPH), maupun perkebunan kelapa sawit. “Setidaknya 2,7 juta hektar dari total 35 juta hektar tutupan hutan alam di Tanah Papua (41 kali luas DKI Jakarta) terancam deforestasi karena berada dalam konsesi kelapa sawit, hutan tanaman industri maupun pertambangan,” papar Nico Wamafma, Juru Kampanye Hutan Papua Greenpeace Indonesia [1]. Deforestasi juga mengancam budaya asli Papua hilang di tanah asalnya.',
                five: 'Dalam Festival ini, Greenpeace dan Pusat Studi Melanesia, Universitas Cenderawasih akan merilis hasil riset mengenai ancaman keberadaan industri pangan yang cenderung meminggirkan pangan lokal. Hal ini juga mengancam keberadaan unsur-unsur budaya masyarakat adat. Hasil riset yang dilakukan di dua kawasan menunjukkan kondisi berbeda. Di Kampung Dabe II, masyarakat adat masih melakukan pengolahan pangan lokal dan melestarikan budaya pangan asli Papua. Sementara di kampung Asiki masuknya industri pangan telah menggerus pangan lokal sehingga mereka lebih banyak mengkonsumsi beras yang dibeli dari pasar.',
                six: 'Festival Suara Jernih Papua ingin mengajak semua pihak mengenal lebih dekat Tanah Papua yang kaya akan sumber daya alam, kearifan lokal dan budaya serta pangan lokal yang patut dilestarikan. Pelestarian hutan dan pengakuan hak masyarakat adat Papua adalah solusi penting untuk keluar dari krisis iklim.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/zPf07N4/gas1.jpg',
                date: '15 Maret 2023',
                author: 'Greenpeace',
                title: 'Gerakan Lingkungan dan Buruh Mesti Bersatu Perjuangan Iklim adalah Perjuangan Kelas',
                description: 'Di Indonesia dan berbagai belahan dunia, kelas pekerja terlibat dalam perjuangan lingkungan hidup dan keadilan iklim. Tujuannya ialah bergerak ke ekonomi...',
                one: 'Dunia sedang memanas lebih cepat daripada kapan pun dalam setidaknya dua ribu tahun terakhir. Laporan Panel Lintas Pemerintah untuk Perubahan Iklim (IPCC) menyatakan bahwa kenaikan suhu rata-rata permukaan Bumi antara tahun 2011 dan 2020 adalah 1,1ºC (2°F). Ini lebih hangat dari suhu rata-rata sebelum Revolusi Industri dan lebih hangat dibanding kapan pun dalam 100 ribu tahun terakhir.',
                two: 'Kelahiran Hari Buruh pada 1 Mei, yang saat ini diperingati sebagai May Day di seluruh belahan dunia, berangkat dari kesadaran kelas pekerja yang menuntut hak-hak ekonomi politik dan  industrial mereka. Yang diprotes kala itu antara lain pengetatan jam kerja, upah murah, dan buruknya kondisi lingkungan tempat mereka bekerja.',
                three: 'Banyak praktik perjuangan buruh yang berkaitan dengan masalah lingkungan dan tuntutan terhadap perubahan iklim secara global. Salah satunya organisasi penyadap karet, yang diinisiasi oleh Chico Mendes, The National Confederation of Agricultural Workers (Confederação Nacional dos Trabalhadores na Agricultura ‘CONTAG’). Selain memperjuangkan hak-hak sebagai pekerja, mereka juga berjuang melawan kehancuran hutan Amazon akibat ulah korporasi.',
                four: 'Kita harus melawan praktik monopoli lahan, memperjuangkan reforma agraria yang sejati, dan membangun industri nasional yang berkeadilan. Tujuannya ialah bergerak ke ekonomi yang lebih berkelanjutan dengan cara yang adil bagi semua orang. Ada banyak pekerjaan yang harus dilakukan demi menciptakan transportasi publik yang lebih bersih, membangun infrastruktur energi terbarukan, dan memulihkan alam yang rusak.',
                five: 'Kekuatan rakyat adalah inti kampanye kita untuk mengubah perilaku dan melawan para perusak lingkungan, dan ada banyak hal yang bisa kita pelajari dari gerakan pekerja. Kekuatan tawar-menawar kolektif dan keberanian aksi mogok adalah bukti bahwa orang dapat bekerja sama untuk mengubah dunia menjadi lebih baik.',
                six: 'Mari kita tegaskan kembali keyakinan kita pada kekuatan manusia untuk bekerja sama demi mengubah dunia menjadi lebih baik, memperkuat persatuan nasional bagi buruh, petani, masyarakat adat, kaum perempuan, pemuda, dan mahasiswa. Karena kita membutuhkan kekuatan itu sekarang, mungkin lebih dari sebelumnya.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/MCf9WHB/gas2.jpg',
                date: '12 Maret 2023',
                author: 'Munaroh',
                title: 'Indonesia Ranking Satu Negara Paling Berpolusi se-Asia Tenggara',
                description: 'Polusi udara berisiko besar terhadap kesehatan. Sayangnya, pemerintah tampaknya masih abai terhadap hak rakyat atas udara bersih...',
                one: 'Jakarta, 14 Maret 2023. Indonesia menduduki peringkat pertama negara dengan polusi tertinggi se-Asia Tenggara berdasarkan laporan World Air Quality (IQAir) tahun 2022. Adapun dalam daftar negara paling berpolusi di seluruh dunia, Indonesia berada di posisi ke-26. Merujuk laporan tersebut, tingkat konsentrasi PM 2.5 harian Indonesia mencapai 30.4 µgram/m3 dan 36.2 µgram/m3 untuk Jakarta. ',
                two: 'Angka tersebut menunjukkan adanya perbaikan kualitas udara dibanding tahun sebelumnya, yakni 11 persen secara nasional dan 7 persen di lingkup Jakarta. Meskipun demikian, tingkat konsentrasi tersebut masih enam hingga tujuh kali lipat lebih tinggi dari standar yang ditetapkan Badan Kesehatan Dunia (WHO).',
                three: '“Dengan kondisi kualitas udara yang buruk, gugatan warga negara atas polusi udara juga masih menemui jalan buntu. Presiden RI dan Kementerian Lingkungan Hidup dan Kehutanan malah mengajukan upaya kasasi setelah banding mereka ditolak Pengadilan Tinggi pada November 2022. Itu mengindikasikan arogansi dan sikap abai pemerintah terhadap hak rakyat atas udara bersih,” kata Bondan Andriyanu, Juru Kampanye Greenpeace Indonesia.',
                four: 'Laporan IQAir menyebutkan, polusi udara terus menjadi persoalan lingkungan terbesar yang berisiko terhadap kesehatan. Kelompok yang terus-menerus terekspos dengan udara buruk rentan mengalami gangguan kesehatan, mulai dari mengidap penyakit asma, kanker, paru-paru, jantung, hingga mengalami kematian.',
                five: 'Merujuk laporan yang sama, kualitas udara yang buruk berkontribusi terhadap lebih dari enam juta kematian per tahun di seluruh dunia. Adapun total kerugian ekonominya mencapai US$8 triliun, melebihi 6,1 persen PDB global.',
                six: 'Di Jakarta, misalnya, dampak buruk kualitas udara itu sangat dirasakan oleh masyarakat Marunda, Jakarta Utara. Warga yang bermukim di rumah susun sewa (rusunawa) Marunda harus menghirup polusi debu batu bara selama tiga tahun terakhir. Selain dari pembangkit listrik tenaga uap (PLTU) batu bara, polusi udara di Indonesia disebabkan sektor transportasi–khususnya kendaraan pribadi–dan kebakaran hutan serta lahan.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                image: 'https://i.ibb.co/GxjR03N/gas3.jpg',
                date: '17 Maret 2023',
                author: 'Greenpeace',
                title: 'Soroti Peran Indonesia dalam Perlindungan Laut Global Aktivis Greenpeace',
                description: 'Peran Indonesia sebagai negara kepulauan terbesar di dunia sangat vital dalam upaya mewujudkan target 30x30 ini. Dan tahun 2030 tinggal tujuh tahun lagi...',
                one: 'Jakarta, 14 Maret 2023. Indonesia menduduki peringkat pertama negara dengan polusi tertinggi se-Asia Tenggara berdasarkan laporan World Air Quality (IQAir) tahun 2022. Adapun dalam daftar negara paling berpolusi di seluruh dunia, Indonesia berada di posisi ke-26. Merujuk laporan tersebut, tingkat konsentrasi PM 2.5 harian Indonesia mencapai 30.4 µgram/m3 dan 36.2 µgram/m3 untuk Jakarta.',
                two: 'Angka tersebut menunjukkan adanya perbaikan kualitas udara dibanding tahun sebelumnya, yakni 11 persen secara nasional dan 7 persen di lingkup Jakarta. Meskipun demikian, tingkat konsentrasi tersebut masih enam hingga tujuh kali lipat lebih tinggi dari standar yang ditetapkan Badan Kesehatan Dunia (WHO).',
                three: '“Dengan kondisi kualitas udara yang buruk, gugatan warga negara atas polusi udara juga masih menemui jalan buntu. Presiden RI dan Kementerian Lingkungan Hidup dan Kehutanan malah mengajukan upaya kasasi setelah banding mereka ditolak Pengadilan Tinggi pada November 2022. Itu mengindikasikan arogansi dan sikap abai pemerintah terhadap hak rakyat atas udara bersih,” kata Bondan Andriyanu, Juru Kampanye Greenpeace Indonesia.',
                four: 'Laporan IQAir menyebutkan, polusi udara terus menjadi persoalan lingkungan terbesar yang berisiko terhadap kesehatan. Kelompok yang terus-menerus terekspos dengan udara buruk rentan mengalami gangguan kesehatan, mulai dari mengidap penyakit asma, kanker, paru-paru, jantung, hingga mengalami kematian.',
                five: 'Merujuk laporan yang sama, kualitas udara yang buruk berkontribusi terhadap lebih dari enam juta kematian per tahun di seluruh dunia. Adapun total kerugian ekonominya mencapai US$8 triliun, melebihi 6,1 persen PDB global.',
                six: 'Masyarakat yang tinggal di Jakarta dan sejumlah kota besar lainnya di Indonesia sangat rentan terhadap polusi udara. Selain Jakarta, kota besar dengan tingkat polusi tinggi yakni Surabaya (34.4 µgram/m3), Bandung (26.1 µgram/m3), dan Semarang (24.3 µgram/m3).',
                createdAt: new Date(),
                updatedAt: new Date()
            }
            // tambahkan data lainnya jika diperlukan
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('artikels', null, {});
    }
};