import db from "../common/db.js";

export const getImportant = async (req, res) => {
  const query = "SELECT * FROM important ORDER BY id DESC";

  try {
    const result = await db(query);

    res.status(200).json(result);
  } catch (error) {
    res.status(409).json({ error: error });
  }
};
export const getLastPost = async (req, res) => {
  const query = "SELECT * FROM posts ORDER BY id DESC LIMIT 4";

  try {
    const result = await db(query);

    res.status(200).json(result);
  } catch (error) {
    res.status(409).json({ error: error });
  }
};
