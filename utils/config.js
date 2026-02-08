require("dotenv").config()

const getDatabaseURI = (nodeEnv) => {
  if (nodeEnv === "test") {
    console.log("test environment")
    console.log(process.env.TEST_VAR)
    console.log("env function MONGODB_URI", typeof process.env.TEST_MONGODB_URI)
    console.log("env", process.env)
    return process.env.TEST_MONGODB_URI
  } else if (nodeEnv === "development") {
    console.log("dev environment")
    return process.env.DEV_MONGODB_URI
  } else if (nodeEnv === "production") {
    console.log("prod environment")
    return process.env.MONGODB_URI
  }

  console.log("no environment")
  return 0
}

const PORT = process.env.PORT
const MONGODB_URI = getDatabaseURI(process.env.NODE_ENV)
const TEST_VAR = process.env.TEST_VAR

module.exports = { PORT, MONGODB_URI, TEST_VAR }
