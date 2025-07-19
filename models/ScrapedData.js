// models/ScrapedData.js
import mongoose from 'mongoose';

const ScrapedDataSchema = new mongoose.Schema({
  url: String,
  data: mongoose.Schema.Types.Mixed, // Store dynamic JSON data
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.ScrapedData || mongoose.model('ScrapedData', ScrapedDataSchema);
