const { quotes } = require('../../database')

module.exports = id => {
  return quotes[id]
}
