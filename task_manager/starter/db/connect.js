const mongoose = require("mongoose")

// const connectionString =
//   "mongodb+srv://adarsh:nokia9841@nodeexpressproject.auwrbas.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"
const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log("connected to db")
}
module.exports = connectDB
