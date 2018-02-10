import mongoose, { Schema } from "mongoose";

const SectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    todos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo"
      }
    ]
  },
  { timestamps: true }
);

SectionSchema.statics.addTodo = async function(id, args) {
  const Todo = mongoose.model("Todo");
  const todo = await new Todo({ ...args, section: id });
  const section = await this.findByIdAndUpdate(id, {
    $push: { todos: todo.id }
  });

  return {
    todo: await todo.save(),
    section
  };
};

export default mongoose.model("Section", SectionSchema);
