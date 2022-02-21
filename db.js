require('dotenv').config();
const mongoose = require('mongoose');
const { nanoid } = require('nanoid')

const postSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String,
    user: String,
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

async function connect() {
    await mongoose.connect(process.env.URI)
    console.log('Connect success')
    return data = await Post.find()
}

async function addDoc(e) {
  const { title, content, userId } = e
  await mongoose.connect(process.env.URI)
  const silence = new Post({
    id: nanoid(),
    title: title,
    content: content,
    user: userId,
    date: '1995-12-17T03:24:00',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  });
  silence.save()
  console.log('Save success')
}

module.exports.connect = connect
module.exports.addDoc = addDoc
