const express = require("express")
const app = express()
const tasks = require("./routes/task")
const connectDB = require("./db/connect")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")
require("dotenv").config()
const port = process.env.PORT || 8000

// middle wares
app.use(express.static("./public"))
app.use(express.json())

//routes
app.use("/api/v1/tasks", tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (e) {
    res.status(500).json({ msg: e })
    console.error(e)
  }
}
start()
