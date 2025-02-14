console.log("hello server");

import express from "express";
const app = express()
const port = process.env.PORT || 3000
//192.168.228.243:3000
app.get('/', (req, res) => {
    console.log(req.ip);
  res.send('Hello World! '+ new Date().toLocaleString())
})
app.get('/about', (req, res) => {
    console.log(req.ip);
  res.send('I am about page '+ new Date().toLocaleString())
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
