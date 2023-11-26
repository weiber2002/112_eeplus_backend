import Activity from "../models/Activity.js";

const getAllActivity = async(req,res)=>{
    const  allActivity = await Activity.find({}) //所有東西都會
    res.send(allActivity)  //回傳
}
export default getAllActivity