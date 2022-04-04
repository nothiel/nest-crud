import mongoose from 'mongoose';
const { Schema } = mongoose;


mongoose.connect(`mongodb://root:MongoDB2019!@localhost:27017`)

const playerSchema = new Schema({
    nickname:  String, // String is shorthand for {type: String}
    vocation: String,
    level: Number,
    createdAt: Date
  });


export const Player = mongoose.model('Player', playerSchema)