const submitChar = async (req, res) => {
  const { username, data } = req.body;
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
      family
    ]);
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json("An error occured!");
  }
};

module.exports = {
  submitChar
};
