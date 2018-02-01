import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "You must give a todo title!"]
    },

    description: {
      type: String,
      required: [true, "You must give some description about todo!"]
    },

    tag: {
      type: String
    },

    status: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Todo", TodoSchema);
