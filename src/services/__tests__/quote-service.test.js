const { getQuote, findAllQuotes } = require('../quote-service')
describe('quote-service', () => {
  describe('getQuote', () => {
    it('should get a quote with author', () => {
      expect(getQuote(1)).toHaveProperty('author')
    })
    it('should get the quote itself', () => {
      expect(getQuote(1)).toHaveProperty('quote')
    })
    it('should get a quote with category', () => {
      expect(getQuote(1)).toHaveProperty('cat')
    })
  })
  describe('findAllQuotes', () => {
    it('should be defined', () => {
      expect(findAllQuotes.toBeDefined)
    })
    it('should return an array with lenght greater than one', () => {
      expect(findAllQuotes().length).toBeGreaterThanOrEqual(1)
    })
    it('should return an array of quotes', () => {
      const quotes = findAllQuotes()
      quotes.map(quote => {
        expect(quote).toHaveProperty('author')
        expect(quote).toHaveProperty('quote')
        expect(quote).toHaveProperty('cat')
      })
    })
  })
})
