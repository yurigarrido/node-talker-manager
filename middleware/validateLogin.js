const SHA256 = require('crypto-js/sha256');

module.exports = (req, res, next) => {
  const { email } = req.body;

  if (email) {
    const hashEmail = SHA256(email).toString().substring(0, 16);
    
    const shuffle = (str) => [...str].sort(() => Math.random() - 0.5).join('');
    const hashShuffle = shuffle(hashEmail);

    req.headers.token = hashShuffle;

    res.status(200).json({ token: hashShuffle });
  }

  next();
};