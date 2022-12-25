const { Schema, model, default: mongoose } = require('mongoose')

const placeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  location: {
    lattitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User'
  }
},
  { timestamps: true })

module.exports = model('Place', placeSchema)