const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;
const subSubcategorySchema = new mongoose.Schema(
  {
    parentCategory: {
      type: ObjectID,
      required: true,
      ref: "subCategory",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    subsubcategoryname: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const subCategory = mongoose.model("subSubCategory", subSubcategorySchema);
module.exports = subCategory;
