import db from "../common/db.js";

export const getAsideLinks = async (req, res) => {
  const query = "SELECT * FROM aside_links ORDER BY id";

  try {
    const result = await db(query);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(409);
    res.json(error);
  }
};
