import Activity from "../models/Activity.js";

const Delete = async(req,res)=>{

    const _id = req.body._id    
    // console.log(req.body) 印出來看看req.body是什麼
    console.log(_id)
    const product = await Activity.findByIdAndDelete({_id})
}
export default Delete;