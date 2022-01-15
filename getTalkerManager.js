const fs = require('fs');

const getTalk = async () => {
  const response = await fs.readFileSync('./talker.json', 'utf8');
  const data = await JSON.parse(response);
  return data;
};

module.exports = { getTalk };