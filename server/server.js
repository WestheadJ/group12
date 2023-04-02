const express = require('express')
const app = express()

const port = 4001
const fs = require('fs/promises')
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.post('/save-graph', (req, res) => {
    console.log(req.body)
    const path = `../configs/graphs/${req.body.graph_id}.json`
    fs.readFile(path)
    .then((data) => {
      data = JSON.parse(data)
      console.log(data.data.datasets[0].label)

      data.data.datasets[0].label = req.body.graph_title

      fs.writeFile(path,JSON.stringify(data),(err)=>console.log(err)) 
    })
    .catch((error) => {
      console.log(error)
    });
    // console.log(req)
    res.send('Hello World! ')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})