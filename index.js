
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/connectDB")
const authRoute = require("./routes/api_auth_routes");
const cookieParser = require('cookie-parser')


dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3333

// Configs
app.use(express.json())
app.use(cookieParser());


//Router
authRoute(app);

app.listen(port, () => console.log("Server is runing with port " + port))






