module.exports = (req, res, next) => {
  console.log(`Access: ${req.originalUrl} - Time: ${new Date().toUTCString()}`)
  next()
}
