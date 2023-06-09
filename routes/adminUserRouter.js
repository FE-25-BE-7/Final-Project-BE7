const express = require("express");
const router = express.Router();

const {
    getAllUser,
    deleteUser

} = require("../controllers/adminUserController")
    // all user

// all admin user
router.get("/api/user", getAllUser);
router.delete("/api/delete/:id", deleteUser);

module.exports = router;