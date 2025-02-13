import db from "../common/db.js";

export const getLinks = async (req, res) => {
  const query = "SELECT * FROM links";

  try {
    const result = await db(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const getDownloadLinks = async (req, res) => {
  const query = "SELECT * FROM downloads";

  try {
    const result = await db(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};
