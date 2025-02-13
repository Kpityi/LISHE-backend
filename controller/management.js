import db from "../common/db.js";

export const getManagement = async (req, res) => {
  const query = "SELECT * FROM management";
  try {
    const result = await db(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(409).json({ error: error });
  }
};
