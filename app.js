const express = require("express")
const mongoose = require("mongoose")
const config = require("./utils/config")
const middleware = require("./utils/middleware")
const blogRouter = require("./controllers/blog")
const userRouter = require("./controllers/user")
const loginRouter = require("./controllers/login")

const app = express()
app.use(express.json())
app.use(express.static("frontend/dist"))

console.log("TEST_VAR", config.TEST_VAR, typeof config.TEST_VAR)
console.log("MONGODB_URI", typeof config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)

app.use(express.json())
app.use(middleware.tokenExtractor)

app.use("/api/blogs", blogRouter)
app.use("/api/users", userRouter)
app.use("/api/login", loginRouter)

if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development") {
  const testingRouter = require("./controllers/testing")
  app.use("/api/testing", testingRouter)
}

app.use(middleware.errorHandler)

module.exports = app
