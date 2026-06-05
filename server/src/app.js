const express = require("express");
const cors = require("cors");

const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Medical QR API Running");
});

app.use("/api/profile", profileRoutes);

module.exports = app;