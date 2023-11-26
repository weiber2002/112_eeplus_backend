import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv-defaults";
dotenv.config();
//存在env的資料會同步儲存在process.enc中
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection establish successfully");
});

  
import activitiesRouter from "./routes/main.js"

app.use("/activities", activitiesRouter);

app.listen(port, () => {
  console.log("Server listening on ", port);
});
