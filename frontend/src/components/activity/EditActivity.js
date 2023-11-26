import React,{useState,useEffect} from 'react'
import instance from '../../api';
import { useParams,useNavigate} from 'react-router'

const EditActivity = () => {
  const [act, setAct] = useState({title:"",description:"",date:"",address:""});
  const id=useParams().id;  //react.router 的函式 可以抓到網址後的變數 
  const navigate = useNavigate(); // 轉換頁面

  const getAct = () => {
    instance.get("/",{params:{_id:id}}).then(res=>{
      setAct(res.data[0]);
    }).catch(err=>console.log("error in getAct",err))
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAct({ ...act, [name]: value });
  };

  const onClick = () =>{
    instance.delete("/delete",{data:act})
    .then(console.log("delete success"))
    .catch(err=>console.log(err))
    navigate('/')
  }

  const  onSubmit = () => {
    instance
      .post("/add", { data: act })
      .then((res) => {console.log(res.data)
      })
      .catch((err) => console.log("error in edit activity", err));
      window.location='/'
      navigate('/')
  };

  useEffect(() => {
    getAct();
  },[])
  return (
    <div>
      <h3>Edit Activity</h3>
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
          <textarea
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
              type="date"
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
            value="Save"
            className="btn btn-primary my-3"
          />
        </div>
      </form>
      <div>
        <button onClick={onClick}>delete</button>
      </div>
    </div>
  );
}

export default EditActivity