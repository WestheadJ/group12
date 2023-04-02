const express = require('express')
const app = express()

const port = 4001
const fs = require('fs')
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.post('/save-graph', (req, res) => {
    console.log(req.body)
    fetch(`../configs/graph/${}`)
    // console.log(req)
    res.send('Hello World! ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})