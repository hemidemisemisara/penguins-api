const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const friendshipRoutes = require("./routes/friendship-routes");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(express.json());
app.use(cors());
app.use("/friendship", friendshipRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to Penguins API ✨🐧✨");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${BACKEND_URL}:${PORT}`);
});
