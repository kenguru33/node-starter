const { getQuote } = require('../../services/quote-service')
module.exports = (req, res) => {
  res.status(200).json(getQuote(1))
}
