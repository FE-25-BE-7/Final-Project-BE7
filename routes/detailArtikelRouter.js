const express = require("express");
const router = express.Router();

const {
    getAllDetailArtikel,
    getDetailArtikelById

} = require("../controllers/detailArtikelController")
    // all user

// all admin user
router.get("/api/detail-artikel", getAllDetailArtikel);
router.get("/api/detail-artikel/:id", getDetailArtikelById);

module.exports = router;