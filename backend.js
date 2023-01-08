// built-in imports
const path = require("path");
const express = require("express");
// configs
const port = process.env.PORT || 3000;
const app = express();

// allow cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// static dir setup
app.use(express.static(path.join(__dirname, "build")));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, response) => {
  response.sendFile("index.html", {
    root: `${__dirname}/build/`,
  });
});

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
