const getAllChars = async (req, res) => {
  const { username } = req.params;
  const db = req.app.get("db");
  console.log(req.params);
  console.log(username);

  try {
    const response = await db.getChars(username);
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteChar = async (req, res) => {
  const { id, username } = req.params;
  const db = req.app.get("db");
  console.log("DELETING " + id);
  console.log(username);

  try {
    const response = await db.delChar([id, username]);
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllChars,
  deleteChar
};
