const fs = require('fs');
// const { getTalk } = require('../talker.json');

// const getTalk = async () => {
//   const response = await fs.readFileSync('./talker.json', 'utf8');
//   const data = await JSON.parse(response);
//   return data;
// };

module.exports = async (_req, res, _next) => {
  const response = await fs.readFileSync('./talker.json', 'utf8');
  const data = await JSON.parse(response);

  // if (!data) return res.status(200).json([]);
  return res.status(200).json(data);
};