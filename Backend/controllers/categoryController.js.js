const asyncHandler = require("express-async-handler");
const categories = require("../Models/categoryModel");
const subCategories = require("../Models/subCategoryModel");
const subSubCategories = require("../Models/subSubCategory");
const products = require("../Models/productModel");
const { default: mongoose } = require("mongoose");
const objectId = mongoose.Types.ObjectId;

//get Main catogories and all Products

const getCategories = asyncHandler(async (req, res) => {
  const Categories = await categories.find();
  const Products = await products.find();
  res.status(200).json({ Categories, Products });
});

//get subCategories and Products in that particular Subcategory

const getSubCategories = asyncHandler(async (req, res) => {
  const SubCategories = await subCategories.find({
    parentCategory: objectId(req.params.id),
  });
  const Products = await products.find({ category: objectId(req.params.id) });
  res.status(200).json({ SubCategories, Products });
});

//get SubSub Categories and Products in that particular subSubcategory

const getSubSubCategories = asyncHandler(async (req, res) => {
  const SubSubCategories = await subSubCategories.find({
    parentCategory: objectId(req.params.id),
  });
  const Products = await products.find({
    subcategory: objectId(req.params.id),
  });

  res.status(200).json({ SubSubCategories, Products });
});

//get all products in particular subsubCategory

const getProducts = asyncHandler(async (req, res) => {
  const Products = await products.find({ sscategory: objectId(req.params.id) });
  res.status(200).json({ Products });
});

module.exports = {
  getCategories,
  getSubCategories,
  getSubSubCategories,
  getProducts,
};
