const express = require('express')
const routes = require('./routes')
const cors = require('cors')

require('./database')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.use(routes)

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
