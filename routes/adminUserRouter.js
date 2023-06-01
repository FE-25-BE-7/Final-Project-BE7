const express = require("express");
const router = express.Router();

const {
    getAllUser

} = require("../controllers/adminUserController")

router.get("/api/user", getAllUser);



module.exports = router;