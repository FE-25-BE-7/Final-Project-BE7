// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({
//             status: 'ERROR',
//             message: 'No token provided'
//         });
//     }

//     jwt.verify(token.replace('Bearer ', ''), process.env.TOKEN_SECRET, (err, decoded) => {
//         if (err) {
//             return res.status(401).json({
//                 status: 'ERROR',
//                 message: 'Invalid token'
//             });
//         }

//         // Token valid, menyimpan informasi pengguna di objek req
//         req.userId = decoded.userId;

//         // Lanjutkan ke middleware atau handler berikutnya
//         next();
//     });
// };

// module.exports = { verifyToken };