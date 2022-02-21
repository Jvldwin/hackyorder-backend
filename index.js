const { connect, addDoc } = require('./db')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const  cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/posts', (req, res) => {
  const { title, content, userId } = req.body
  addDoc({ title, content, userId })
})

app.patch('/posts/:postId', (req, res) => {
  res.send(req.params)
})

app.delete('/posts/:postId', (req, res) => {
  res.send(req.params)
})

app.get('/posts', async (req, res) => {
  const data = await connect()
  res.send(data)
})

app.get('/posts/:postId', async (req, res) => {
  const data = await connect()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})