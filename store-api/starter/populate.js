require("dotenv").config()
const connectDB = require("./db/connect")
const Product = require("./models/product")
const jsonProducts = require("./products.json")

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log("connected to db in populate")
    await Product.deleteMany()
    await Product.create(jsonProducts)
    console.log("created products successfully")
    process.exit(0)
  } catch (e) {
    console.log(e.toString())
    process.exit(1)
  }
}

start()
