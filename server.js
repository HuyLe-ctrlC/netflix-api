const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const userRoutes = require("./routes/UserRoutes");
const dbConnect = require("./db/connectDB");
const app = express();

dbConnect();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

app.listen(5000, console.log("server started"));
