import User from "../schemas/userProfile.js";

//  login manager tool-------------------------------------------------
export const login = async (req, res) => {
    try {
        const { username, password } = req.body.form;
        const user = await User.findOne({username: username, password: password});
        if(user){
            req.session.isAuth= true;
            res.send(user);}
        else res.send("Invalid username or password");
    }
    catch (err) {
        console.log(err);
    }
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
    res.send(user);
}

