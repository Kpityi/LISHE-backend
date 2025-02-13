import db from "../common/db.js";

export const getGallery = async (req, res) => {
  const data = [];

  const query = "SELECT * FROM gallery ORDER BY event";
  try {
    const result = await db(query);

    let currentAlbum = null;

    let index = -1;

    result.forEach((album) => {
      if (currentAlbum && album.event === currentAlbum.albumName) {
        data[index].images.push(album.image_name);
      } else {
        currentAlbum = {
          albumName: album.event,
          images: [album.image_name],
        };
        data.push(currentAlbum);
        index++;
      }
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(409).json(error);
  }
};
