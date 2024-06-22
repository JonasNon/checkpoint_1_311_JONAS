const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser");


app.get('/', (req, res) => res.send('default route'))

const usersRoute = require('./routes/users.js')
app.use(usersRoute)






app.listen(port, () => {
  console.log('app is listening on:', port)
})