const express = require("express");
const router = express.Router();
const { getCategories,getSubCategories,getSubSubCategories,getProducts } = require('../controllers/categoryController.js')

router.get("/", getCategories);
router.get("/getsubcategories/:id", getSubCategories);
router.get("/getsubsubcategories/:id", getSubSubCategories);
router.get("/getcatproducts/:id", getProducts);


module.exports = router