const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const  cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res) => {
  res.send([
    {
      id: '1',
      title: 'First Post!',
      content: 'Hello!',
      user: '0',
      date: Date('1995-12-17T03:24:00'),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
    {
      id: '2',
      title: 'Second Post',
      content: 'More text',
      user: '2',
      date: Date('1995-12-17T03:24:00'),
      reactions: {
        thumbsUp: 0,
        hooray: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
    },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})