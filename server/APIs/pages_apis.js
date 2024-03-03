import Post from "../schemas/posts.js";
import User from "../schemas/userProfile.js";

export const setPost = async (req, res) => {
    const { content } = req.body;
    const username_id= req.session.user_id;
    const author = req.session.username;
    const image= req.session.image_name;
    const newPost = new Post({
        username_id:username_id,
        author:author,
        content: content,
        image:image
    });
    const savepost = await newPost.save();
    res.status(200).redirect('/feed');
    
}
export const getPost = async (req, res) => {
    const posts = await Post.find();
    res.send(posts);
}
export const getPosts = async (req, res) => {
    const posts = await Post.find();
    return posts;
}
export const likePost = async (req, res) => {
    
    const post = await Post.findById(req.session.user_id);
    post.likes = post.likes + 1;
    await post.save();
    res.send(post);
}
