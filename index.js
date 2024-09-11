// importing express

const express = require('express')

// initialing express storing it in a variable called app

const app = express()

// port
require("dotenv").config()
const PORT = process.env.PORT || 4000

// import database connection
const connectDB = require("./database/db")

// execute database connection
connectDB()

// import user route
const userRoute = require("./routes/userRoute")

// middleware
app.use(express.json())

// using the user troute
app.use("/api/user", userRoute)

// testing general route
app.get("/api", (req, res)=>{
    res.json({message: "welcome to my server"})
})

// listen for request
app.listen(PORT, ()=>{
    console.log("server started sucessfully");
})
