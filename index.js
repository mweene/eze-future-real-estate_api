const express = require("express");
const path = require("path");
const clientRoutes = require("./routes");
const docRoute = require("./routes/docRoutes.js");
const app = express();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use("/", docRoute);
app.use("/api", clientRoutes);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
