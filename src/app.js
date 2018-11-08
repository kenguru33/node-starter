const express = require('express')
const app = express()
const routes = require('./routes/api-router')

app.use('/api', routes)
app.get('/', (req, res) => {
  res.send('Welcome to my api.')
})
app.get('*', (req, res) => {
  res.send('Whoops, you felt off the edge!')
})
app.listen(3000, () => {
  console.log('listening on port 3000')
})
