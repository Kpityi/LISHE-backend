import db from "../common/db.js";

export const getBasicPrices = async (req, res) => {
  const query = `SELECT  price.id, 
                        price.name, 
                        price.normal_price, 
                        price.late_submission_price, 
                        types.type as ticket_type,
                        price.year 
                    FROM base_prices AS price 
                    LEFT JOIN types 
                    ON price.type_id = types.id
                    ORDER by id`;

  try {
    const result = await db(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(409).json(error);
  }
};
export const getHECSSMSZPrices = async (req, res) => {
  const query = `SELECT price.id, 
                        price.type, 
                        price.name, 
                        price.area, 
                        price.price, 
                        price.year, 
                        types.type as ticket_type
                    FROM hemcsmsz_prices as price 
                    LEFT JOIN types 
                    ON price.ticket_type_id = types.id
                    ORDER by id`;

  try {
    const result = await db(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(409).json(error);
  }
};
export const getMartelyPrices = async (req, res) => {
  const query = `SELECT price.id,   
                        price.name, 
                        price.code, 
                        price.price, 
                        price.year, 
                        types.type as ticket_type
                    FROM martely_prices as price 
                    LEFT JOIN types 
                    ON price.ticket_type_id = types.id
                    ORDER by id`;

  try {
    const result = await db(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(409).json(error);
  }
};
