import mongoose from "mongoose";
const Post = new mongoose.Schema({
    username_id: { type: String, required: true },
    author : { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    image: { type: String },
    createdAt: { type: Date, default: new Date() }



});
export default mongoose.model('post', Post);