import express from "express";
import connectToMongoDB from './database/db';
import user from './routes/person.routes'

export const app = express();
const PORT=process.env.DB_PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//connect DB if there is no error
connectToMongoDB()
/**
 * Base url
 */
const baseUrl ='/api/';

/**
 * mount routes
 */
app.use(baseUrl,user);
