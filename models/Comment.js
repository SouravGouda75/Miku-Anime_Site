import { Schema, model, models } from "moongoose";

const CommentSchema = new Schema({
  text: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = models.Comment || model('Comment', CommentSchema)
export default Comment
