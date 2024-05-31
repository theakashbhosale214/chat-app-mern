import express from 'express';
import dotenv from 'dotenv';
import authRouter from './route/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use('/api/auth',authRouter);

// app.get("/", (req,res) => {
//     res.send("Hiioo");
// })


app.listen(PORT,() =>{
     connectToMongoDB();
     console.log(`Server is running on port ${PORT}`)
    })