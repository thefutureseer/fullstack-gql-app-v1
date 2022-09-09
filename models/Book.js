const mongoose = require('mongoose');
//If we want to do new Schema instead use:
// const { Schema } = mongoose;

//Define the schema
const BookSchema = new mongoose.Schema({
  _id: String,
  title: {
    type: String,
<<<<<<< HEAD
    required: true
=======
    // required: true
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
  },
  author: {
    type: String,
    required: true
  },
  prom: {
<<<<<<< HEAD
    type: String,
=======
    type: Boolean,
>>>>>>> efcb389c3cf65a675bab093dac66b60498085f04
    // required: true
  },
  reminders: {
    type: Number,
    // required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
},
{ timestamps: true },
);

//Model
const Book = mongoose.model('books', BookSchema);

module.exports = Book;