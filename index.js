const express = require("express");
const middleware = require("./middleware");
const port = process.env.PORT || 5050;

const app = express();
middleware(app);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
