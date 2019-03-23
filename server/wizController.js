const axios = require("axios");

const submitChar = async (req, res) => {
  const { username, data, charname } = req.body;
  const { color, race, archetype, fear, pet, family } = data;

  const db = req.app.get("db");

  try {
    const response = await db.submitChar([
      username,
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
    res.status(500).json("An error occured!");
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