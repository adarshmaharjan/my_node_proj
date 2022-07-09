require("dotenv").config()
require("express-async-errors")
const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const notFoundMiddleWare = require("./middleware/not-found")
const errorHandlerMiddleWare = require("./middleware/error-handler")
const connectDb = require("./db/connect")
// * middleware
app.use(express.json())

const productRoute = require("./routes/products")
// * routes
app.get("/", (req, res) => {
  res.send(`<h1>Store Api</h1><a href = "/api/v1/products">products routes</a>`)
})

app.use("/api/v1/products", productRoute)
// error handler
app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)
const start = async () => {
  try {
    //connect
    await connectDb(process.env.MONGO_URI)
    console.log("connected to db")
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}
start()
