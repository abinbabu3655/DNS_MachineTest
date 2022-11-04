const db = require('../config/dbConnection')
const asyncHandler = require('express-async-handler')
const collection = require('../config/collections')


const getCollection  =asyncHandler(async (req,res)=>{
    const collections =await db.get().collection(collection.CATEGORY_COLLECTION).find().toArray()
    console.log(collections);
    res.status(200).send({
        collections
    })
})

module.exports = {
    getCollection
}