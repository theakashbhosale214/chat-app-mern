import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRouter from './route/auth.routes.js'
import messageRoutes from './route/message.routes.js'
import userRoutes from './route/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRouter);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);


// app.get("/", (req,res) => {
//     res.send("Hiioo");
// })


app.listen(PORT,() =>{
     connectToMongoDB();
     console.log(`Server is running on port ${PORT}`)
    })