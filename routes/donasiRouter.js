var express = require('express');
var router = express.Router();

const {
    donasiGet,
    reqDonasi

} = require("../controllers/donasiController")


router.get("/api/donasi", donasiGet);
router.post("/api/donasi/charge", reqDonasi);



module.exports = router;