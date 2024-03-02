import express, { Router } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routers from './routes/index.js';
import {connectDB} from "./dbConfig/db.js"
const app = express();
dotenv.config();
// session key setup
app.use(cookieSession({
	name: 'session',
    keys: [crypto.randomBytes(32).toString('hex')],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cookieParser());
connectDB();


app.use(express.json());
app.use('/api',routers);
app.listen(process.env.PORT, () => {
	console.log(`Server is running in ${process.env.PORT} mode, under port ${process.env.PORT}.`);
});