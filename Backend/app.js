const { urlencoded, json } = require("express");
const express = require("express");
const { connectDb } = require("./config/db");
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/route");
const cors = require('cors')

const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use("/", router);





connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server Running at port:${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
