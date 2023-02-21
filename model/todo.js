import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  data: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const todo = mongoose.model("todo", TodoSchema);

export default todo;
