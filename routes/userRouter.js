const express = require("express");
const router = express.Router();
// const { verifyToken } = require('../middleware/verifyToken');
const {
    registerUser,
    loginUser,
    login
    // getUserByToken
    // verifyToken

} = require("../controllers/userController")

router.post("/api/aut/register", registerUser);
router.post("/api/aut/login", login);
// router.get("/token", getUserByToken);

module.exports = router;