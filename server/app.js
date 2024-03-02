import express, { Router } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routers from './routes/index.js';

dotenv.config();

// const connectDB = require("./config/db.config");
const app = express();

app.use('/',routers);
app.listen(process.env.PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} mode, under port ${process.env.PORT}.`);
});