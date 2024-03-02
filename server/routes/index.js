import express from 'express';
const userRoutes = express.Router();
import login from "./APIs/testAPI.js";
userRoutes.post('/login', login);

export default userRoutes;