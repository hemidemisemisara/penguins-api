const express = require("express");
const cors = require("cors");
const app = express();
const friendshipsRoutes = require("./routes/friendships-routes");
const howWhereRoutes = require("./routes/how-where-routes");
const firstImpressionRoutes = require("./routes/first-impression-routes");
const thingsInCommonRoutes = require("./routes/things-in-common-routes");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use("/friendships", friendshipsRoutes);
app.use("/how-where", howWhereRoutes);
app.use("/first-impression", firstImpressionRoutes);
app.use("/things-in-common", thingsInCommonRoutes);

app.get("/", (_req, res) => {
  res.send("Welcome to Penguins API ✨🐧✨");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${BACKEND_URL}:${PORT}`);
});
