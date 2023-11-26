import Activity from "../models/Activity.js"

const addActivity = async(req,res)=>{
     
    const {title,description,date,address,_id} = req.body.data //前端發出add api時，順便把名為data的資料傳過來   instance.post('/add',{data:act})

    if(_id){
        await Activity.findOneAndUpdate({"_id":_id},{_id,title,description,date,address}).catch((err)=>{console.log(err)})
        res.send("Activity updated")
    }
    else{  
    const newActivity = await new Activity({
        title,description,date,address
        //原本 title:title description:description,date:date,address:address 可以寫成這樣
    }).save().catch(e=>console.log("error in add activity",e)) //e代表 error 也可以寫成err 或其他東西 反正這邊傳進來的是錯誤訊息 
    }
}
export default addActivity