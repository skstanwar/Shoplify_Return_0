import express, { Router } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {router ,pagerouter}from './routes/route.js';
import {connectDB} from "./dbConfig/db.js"
import  bodyParser from 'body-parser';
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
const fileUrl= new URL(import.meta.url);
const filePath=dirname(fileURLToPath(fileUrl));
const staticPath = join(filePath,'static');
const publicPath= join(filePath,'public');
const views= join(filePath,'views');
app.set('view engine', 'ejs');	
app.set('views', views);
app.use(express.static(staticPath));
app.use(express.static(publicPath));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/' , pagerouter);
app.use('/api',router);
app.listen(process.env.PORT, () => {
	console.log(`Server is running in ${process.env.PORT} mode, under port ${process.env.PORT}.`);
});