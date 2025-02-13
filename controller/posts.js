import db from "../common/db.js";

/* News */
export const getPosts = async (req, res) => {
  const { id } = req.params;
  const isId = id;
  const queryId = "SELECT * FROM posts WHERE id=?";
  const query = "SELECT * FROM posts WHERE type_id=8 ORDER BY id DESC ";

  try {
    if (isId) {
      const result = await db(queryId, [id]);

      res.status(200).json(result);
    } else {
      const result = await db(query);
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(409).json({ error: error });
  }
};

/* Tenders */
export const getTenders = async (req, res) => {
  const { id } = req.params;
  const isId = id;
  const queryId = "SELECT * FROM posts WHERE id=?";
  const query = "SELECT * FROM posts WHERE type_id=9 ORDER BY id DESC ";

  try {
    if (isId) {
      const result = await db(queryId, [id]);

      res.status(200).json(result);
    } else {
      const result = await db(query);
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(409).json({ error: error });
  }
};
