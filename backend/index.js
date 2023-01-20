const express = require("express");
const cors = require("cors")
const { userRouter } = require("./routes/signup_route.js")
const { connection } = require("./configs/db.js");

const app = express();
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

app.listen(4300, async () => {
    try {
        await connection;
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Not connect DB" + error)
    }
    console.log("Server is Running at port 4300")
})