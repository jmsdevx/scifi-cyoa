const axios = require("axios");

const submitChar = async (req, res) => {
  const { username, data, charname, update } = req.body;
  const { color, race, archetype, fear, pet, family, id } = data;
  console.log(req.body);
  console.log(data);
  console.log(username);
  console.log(id);

  const db = req.app.get("db");

  if (!update) {
    try {
      const response = await db.submitChar([
        id,
        color,
        race,
        archetype,
        fear,
        pet,
        family,
        charname
      ]);
      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json("Error!");
    }
  } else {
    try {
      const response = await db.editChar([
        id,
        color,
        race,
        archetype,
        fear,
        pet,
        family,
        charname,
        username
      ]);
      console.log(response);
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json("Error!");
    }
  }
};

const getName = (req, res) => {
  axios
    .get("https://uinames.com/api/?region=albania")
    .then(response => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = {
  submitChar,
  getName
};
