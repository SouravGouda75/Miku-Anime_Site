import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  caption: {
    type: String,
  },
  likes: [
    {
      type: moongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: moongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  image: {
    type: String,
  },
  userId: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = models.Post || model("Post", PostSchema);
export default Post;
