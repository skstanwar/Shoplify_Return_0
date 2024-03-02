import express from 'express';
const userRoutes = express.Router();
import {login , register} from "../APIs/auth.js";
userRoutes.post('/login', login);
userRoutes.post('/register', register);
export default userRoutes;