const express = require("express");
const router = express.Router();

const {
    getPrograms,
    addList

} = require("../controllers/listProgramController")
    // all user

// all admin user
router.get("/api/programslist", getPrograms);
router.post("/api/programslist", addList);

module.exports = router;