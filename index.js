const express = require("express");

const app = express();

app.get("/", (req, res) => res.send({ message: "OK" }));

console.log("Listening at port 3000...");
app.listen(3000);
