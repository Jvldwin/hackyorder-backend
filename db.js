require('dotenv').config();
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: Number,
    title: String,
    content: String,
    user: Number,
    date: String,
    reactions: {
        thumbsUp: Number,
        hooray: Number,
        heart: Number,
        rocket: Number,
        eyes: Number,
    }
});

const Post = mongoose.model('Post', postSchema);

const silence = new Post({
    id: 1,
    title: 'First Post!',
    content: 'Hello!',
    user: 0,
    date: '1995-12-17T03:24:00',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  });

async function connect() {
    await mongoose.connect(process.env.URI)
    console.log('Connect success')
    return data = await Post.find()
}

module.exports = connect
