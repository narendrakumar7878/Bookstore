import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/bookroute.js";
import userRoute from "./route/userroute.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.URI || "mongodb://localhost:27017/bookstore";

try {
     mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
     });
    console.log("connection sucsessfull db ");
}catch (error) {
   console.log("Error", error);
} 

// app.get('/', (req, res) => {
//     res.send('Mern Project!')
// })

//define Route
app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})