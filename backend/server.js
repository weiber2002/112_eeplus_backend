import express from "express"; //The Express.js web framework.
import cors from "cors";  // Middleware for handling Cross-Origin Resource Sharing (CORS).
import mongoose from "mongoose"; //An ODM (Object Data Modeling) library for MongoDB.
import bodyParser from "body-parser"; //Middleware to parse incoming request bodies
import dotenv from "dotenv-defaults"; // A module to load environment variables from a .env file.
dotenv.config();
//存在env的資料會同步儲存在process.env中

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json()); //Parses incoming JSON payloads in the request body.

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true }); //Connects to MongoDB 
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection establish successfully");
});

  
import activitiesRouter from "./routes/main.js"

app.use("/activities", activitiesRouter); //all routes defined in activitiesRouter will be prefixed with /activities.

app.listen(port, () => {
  console.log("Server listening on ", port);
});
