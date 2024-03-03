import express from 'express';
import {isAuth} from "../middlewares/isAuth.js";
import {login , register,logout} from "../APIs/auth.js";
import {setPost , getPost,getPosts} from "../APIs/pages_apis.js";
export const router = express.Router();
export const pagerouter = express.Router();
import {upload }from "../middlewares/multer.js";

// APIs -------------------------------


router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.post('/setpost', upload.single('image'), setPost);
router.post('/getpost', getPost);



// pages redirection -------------------------------


pagerouter.get('/' ,isAuth, (req,res)=>{
    const User= {
        name: req.session.username,
        email: req.session.email,
        section: 1
    }
    res.render('index.ejs', {User});
});
pagerouter.get('/post' ,isAuth, (req,res)=>{
    const User= {
        name: req.session.username,
        email: req.session.email,
        section: 3
    }
    res.render('index.ejs', {User});
});


pagerouter.get('/feed' ,isAuth, async(req,res)=>{
    const User= {
        name: req.session.username,
        email: req.session.email,
        section: 2
    }
  const posts= await getPosts();
    // console.log(posts);
    res.render('index.ejs', {User, posts});
});


pagerouter.get('/login' , (req,res)=>{
    res.render('login.ejs');
});


pagerouter.get('/register' , (req,res)=>{
    res.render('register.ejs');
});