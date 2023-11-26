import mongoose from "mongoose"
const Schema = mongoose.Schema
const ActivitySchema =  new Schema({
    title:{type:String, required:true}, //require true: 當後端再新增時 必須要有title 不然就不會新增 會回傳錯誤給前端
    description:{type:String},
    date:{type:Date, required:true},
    address:{type:String, required:true}
})
const Activity = mongoose.model("Activity", ActivitySchema)
export default Activity