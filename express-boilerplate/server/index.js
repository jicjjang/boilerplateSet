import express from 'express'

const app = express()
const port = 3000

app.use('/', express.static(__dirname + '/../'))

app.get('/hello', (req, res) => {
  return res.send('hello??')
})

import world from './routes/world'
app.use('/world', world)

const server = app.listen(port, () => {
  console.log('Express listening on port', port)
})
