import express from 'express';
import {isAuth} from "../middlewares/isAuth.js";
const userRoutes = express.Router();
import {login , register} from "../APIs/auth.js";
userRoutes.post('/login', login);
userRoutes.post('/register', register);
export default userRoutes;