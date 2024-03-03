import User from "../schemas/userProfile.js";

//  login manager tool-------------------------------------------------
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({username: username, password: password});
        if(user){
            req.session.isAuth= true;
           req.session.user_id= user.id;
           req.session.username= user.username;
           req.session.email= user.email;
           res.redirect('/');
        }
        else res.send("Invalid username or password");
    }
    catch (err) {
        console.log(err);
    }
}
// logout manager tool-------------------------------------------------
export const logout = async (req, res) => {
    req.session = null;
    res.redirect('/login');
}

//  Register manager tool-------------------------------------------------
export const register = async (req, res) => {
    // res.send("register api is working")
    const { name, username, email, password } = req.body;
    const newUser = new User({
        username,
        name,
        email,
        password
    });
    const user = await newUser.save();
    res.redirect('/login');
}

