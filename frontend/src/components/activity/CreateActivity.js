import { React, useState } from "react";
import {useNavigate} from "react-router-dom"
import instance from "../../api";

const activityTemplate={
  title:"",
  description:"",
  date:"",
  address:""
}

const CreateActivity = () => {

  const navigate = useNavigate(); // 跳轉頁面
  const [act, setAct] = useState(activityTemplate);

  const handleInput=(e)=>{ 
    const {name,value}=e.target;
    setAct({...act,[name]:value});
  }

  const onSubmit = () => {
    instance.post('/add',{data:act}) //會有一隻api 接路徑
    .then(res => console.log(res.data))
    .catch(err=>console.log("error in create activity",err))

    navigate('/')
  };

  return (
    <div>
      <h3>Create New Activity</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="my-1">Title:</label>
          <input
            type="text"
            className="form-control"
            value={act.title}
            name="title"
            onChange={handleInput}
          /> 
        </div>
        <div className="form-group">
          <label className="my-1">Description:</label>
          <textarea // textarea是多行的input 
            className="form-control"
            value={act.description}
            name="description"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label className="my-1">Date: </label>
          <div>
            <input
              type="date" //會出現日歷框
              className="form-control"
              value={act.date}
              name="date"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="my-1">Address: </label>
          <div>
            <input
              type="text"
              className="form-control"
              value={act.address}
              name="address"
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Activity"
            className="btn btn-primary my-3"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateActivity;
