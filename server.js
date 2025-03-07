const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World! Welcome to my Node.js App running on Docker Compose we are using now 10:19");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


