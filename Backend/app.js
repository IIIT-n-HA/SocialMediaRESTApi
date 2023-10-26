const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user-routes");
const blogRoutes = require("./routes/blog-routes");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

mongoose
  .connect(process.env.url)
  .then(() => app.listen(5000))
  .then(() => console.log("Server listening on 5000"))
  .catch((err) => console.log(err));
