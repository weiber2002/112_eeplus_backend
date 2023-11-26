import Activity from "../models/Activity.js";
const getOneActivity = async(req,res)=>{
    const {_id} = req.query
    //console.log(req.query)
    const activity = await Activity.find({_id})
    res.send(activity) //回傳
    
}
export default getOneActivity