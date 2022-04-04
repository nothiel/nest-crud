import mongoose from 'mongoose';
const { Schema } = mongoose;

mongoose.connect(`mongodb://root:MongoDB2019!@localhost:27017`);

interface Player {
  nickname: string;
  vocation: string;
  level: number;
  createdAt: Date;
}

const playerSchema = new Schema<Player>({
  nickname: String, // String is shorthand for {type: String}
  vocation: String,
  level: Number,
  createdAt: Date,
});

export const Player = mongoose.model('Player', playerSchema);
