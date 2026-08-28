import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoute from "./route/contact.route.js";
import subscribeRoute from "./route/subscribe.route.js";
import cors from "cors";
 
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(express.json()); //this line allows express to read what is in the body
app.use(cors({origin: "http://localhost:5173"})); //specifies the domainss that are allowed to read the api

//WHEN THERE ARE MORE THAN ONE ORIGIN WE USE THIS METHOD
//const allowedOrigins = ["http://localhost:5173", "https://websiteName"];
// {app.use(cors({origin: allowedOrigins));}


app.use("/contact", contactRoute);
app.use("/home", subscribeRoute);

// app.get("/about", (req, res) => {
//   res.send("Hi Friend!");
// });

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to DB");

    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// console.log(express);
// console.log("Hello world!");
