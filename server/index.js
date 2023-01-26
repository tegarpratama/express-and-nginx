const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('HIT')
  res.send('Hello Egardev')
})

app.listen(7777, () => {
  console.log('Server running on port 7777')
})
