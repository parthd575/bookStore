import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const purchaseHistorySchema = new Schema({
  id: ObjectId,
  purchaseId: {type: String, unique: true},
  bookId: ObjectId,
  userId: ObjectId,
  purchaseDate: Date,
  price: Number,
  quantity: Number 
});

export const PurchaseHistory = mongoose.model('PurchaseHistory', purchaseHistorySchema);