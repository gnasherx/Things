import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "You must give a todo title!"]
    },

    description: {
      type: String,
      required: [true, "You must give some description about todo!"]
    },

    // tag: {
    //   type: String
    // },

    status: {
      type: Boolean,
      default: false
    },
    section: {
      type: Schema.Types.ObjectId,
      ref: "Section"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Todo", TodoSchema);
