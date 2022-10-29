const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')

app.get('/', (req, res) => {
  res.send('Simple news server running')
})

app.use(cors())

const news = [
  {
    id: 1,
    dateTime: '$now()',
    title: 'News One',
    image: 'https://i.ibb.co/W0zjk40/room-4.jpg',
    caegory: 'Sports',
    author: 'Author Name',
    news:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\\"Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \\"lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
  },
  {
    id: 2,
    dateTime: '$now()',
    title: 'News Two',
    image: 'https://i.ibb.co/xsD6qxG/room-3.jpg',
    caegory: 'Sports',
    author: 'Author Name',
    news:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\\"Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \\"lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
  },
  {
    id: 3,
    dateTime: '$now()',
    title: 'News Three',
    image: 'https://i.ibb.co/tpxRwd2/room-2.jpg',
    caegory: 'Sports',
    author: 'Author Name',
    news:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\\"Content here, content here", making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \\"lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
  },
]

app.get('/news', (req, res) => {
  res.send(news)
})

app.listen(port, () => {
  console.log(`Simple news server is running port ${port}`)
})
