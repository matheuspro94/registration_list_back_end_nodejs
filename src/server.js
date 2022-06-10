const express = require('express')
const routes = require('./routes')
const cors = require('cors')

require('./database')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
