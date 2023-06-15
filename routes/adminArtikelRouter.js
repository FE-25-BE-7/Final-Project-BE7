const express = require("express");
const router = express.Router();

const {
    getAllArtikel,
    getDetailArtikel,
    createArtikel,
    updateArtikel,
    deleteAllArtikel,
    deleteArtikel

} = require("../controllers/adminArtikelController")
    // all user

// all admin user
router.get("/api/artikel", getAllArtikel);
router.get("/api/artikel/:id", getDetailArtikel);
router.post("/api/artikel", createArtikel);
router.put("/api/artikel/:id", updateArtikel);
router.delete("/api/artikel/delete", deleteAllArtikel);
router.delete("/api/artikel/delete/:id", deleteArtikel);

module.exports = router;