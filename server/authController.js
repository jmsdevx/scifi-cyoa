const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");
  const hash = await bcrypt.hash(password, 12);
  try {
    const response = await db.addUser([username, hash, false]);
    req.session.user = {
      username: response[0].username,
      inprogress: response[0].inprogress
    };
    res.status(200).json({ username: response[0].username });
  } catch (err) {
    console.log(err);
    res.status(401).json("An error occurred");
  }
};
const login = (req, res) => {
  const { username, password } = req.body;
  const db = req.app.get("db");
  db.findUser(username)
    .then(async response => {
      console.log(response);
      if (!response.length) {
        res.status(401).json({ error: "No User Found" });
      } else {
        const isMatch = await bcrypt.compare(password, response[0].hash);
        if (!isMatch) {
          res.status(401).json({ error: "Incorrect password" });
        } else {
          console.log(response[0].username);
          req.session.user = {
            username: response[0].username,
            inprogress: response[0].inprogress
          };
          res.status(200).json({ username: response[0].username });
        }
      }
    })
    .catch(err => console.log(err));
};

const getUser = (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ error: "Please log in" });
  }
};

module.exports = {
  signup,
  login,
  getUser
};
