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
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
