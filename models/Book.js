import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ObjectId2 = Schema.ObjectId;

const booksSchema = new Schema({
  id: ObjectId,
  bookId: ObjectId2,
  authors: Array,
  sellCount: Number,
  title: { type : String , unique : true, required : true },
  description: String,
  price: { type: Number, min: 100,max: 1000 }
});

export const BooksSchema = mongoose.model('booksSchema', booksSchema);