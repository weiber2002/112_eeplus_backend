import express from "express"
 const router = express.Router() //用於區分activities
 import addActivity from "./addActivity.js"
 import getAllActivity from "./getAllActivity.js"
 import getOneActivity from "./getOneActivity.js"
 import Delete from "./delete.js"
 
 router.post("/add", addActivity)  //edit 跟 create都是/都是/add
 router.get("/all",getAllActivity)
 router.get("/",getOneActivity)
 router.delete("/delete",Delete)

 export default router

//  let a,b...
//  export {a,b} export 特定變數出去
// import {a,b} from ./../main.js