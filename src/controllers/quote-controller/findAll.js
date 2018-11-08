const { findAllQuotes } = require('../../services/quote-service')

module.exports = (req, res) => {
  const quotes = findAllQuotes()
  res.status(200).json(quotes)
}
