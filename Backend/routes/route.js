const express = require("express");
const router = express.Router();
const { getCollection } = require('../controllers/routerController')

router.get("/",getCollection );



module.exports = router