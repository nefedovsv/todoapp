import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  data: String,
  completed: Boolean,
  userName: String,
});
