import express from "express"
 const router = express.Router() //用於區分activities
 import addActivity from "./addActivity.js"
 import getAllActivity from "./getAllActivity.js"
 import getOneActivity from "./getOneActivity.js"
 import Delete from "./delete.js"
 
 // These lines define routes and associate them with specific route handler functions
 router.post("/add", addActivity)  //both edit and create use add function 
 router.get("/all",getAllActivity)
 router.get("/",getOneActivity)  // get specific activity
 router.delete("/delete",Delete)

 export default router

