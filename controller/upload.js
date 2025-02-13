import db from "../common/db.js";

export const imageUpload = async (req, res) => {
  const folderName = req.body.folder;
  const images = req.files;
  const data = [];
  let values = "";

  images.forEach((image) => {
    data.push(image.filename, folderName);
    values += `(?,?),`;
  });
  values = values.slice(0, -1);

  const query = `INSERT INTO gallery (image_name, event) VALUES ${values}`;
  try {
    const result = await db(query, data);
    if (result.affectedRows > 0) {
      res.status(201).json({ message: "Kép(ek) feltöltése sikeres" });
    }
  } catch (error) {
    res
      .status(409)
      .json({ error: error, message: "Képek feltöltése sikertelen" });
  }
};
