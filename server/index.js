require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { signup, login, getUser, logout } = require("./authController");
const { submitChar } = require("./wizController");

app.use(json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database connected");
});

//auth endpoints
app.post("/auth/signup", signup);
app.post("/auth/login", login);
app.get("/auth/user", getUser);
app.get("/auth/logout", logout);

//characters endpoints
app.post("/wizard/submit", submitChar);

app.listen(4000, () => {
  console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});
