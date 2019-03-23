require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const session = require("express-session");
const app = express();
const { signup, login, getUser, logout } = require("./authController");
const { submitChar, getName } = require("./wizController");
const { getAllChars } = require("./dashController");

app.use(json());
app.use(cors());

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

//wizard endpoints
app.post("/wizard/submit", submitChar);
app.get("/wizard/name", getName);

//dash endpoints
app.get("/:username/characters/all", getAllChars);

app.listen(4000, () => {
  console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});
