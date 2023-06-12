const express = require("express");
const router = express.Router();

const {
    getAllVolunteer,
    getDetailVolunteer,
    daftarVolunteer

} = require("../controllers/volunteerController")
    
router.get("/api/volunteer", getAllVolunteer);
router.get("/api/volunteer/:id", getDetailVolunteer);
router.post("/api/volunteer-daftar", daftarVolunteer);

module.exports = router;