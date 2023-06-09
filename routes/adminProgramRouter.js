const express = require("express");
const router = express.Router();

const {
    getAllProgram,
    getDetailProgram,
    createProgram,
    updateProgram,
    deleteAllProgram,
    deleteProgram

} = require("../controllers/adminProgramController")
    // all program

// all admin program
router.get("/api/program", getAllProgram);
router.get("/api/program/:id", getDetailProgram);
router.post("/api/program", createProgram);
router.put("/api/program/:id", updateProgram);
router.delete("/api/program/delete", deleteAllProgram);
router.delete("/api/program/delete/:id", deleteProgram);

module.exports = router;