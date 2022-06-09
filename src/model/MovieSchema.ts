import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Categories',
  // },
  cover: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model('Movies', Schema);
