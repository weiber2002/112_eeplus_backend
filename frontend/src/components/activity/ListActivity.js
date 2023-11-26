import React,{ useState, useEffect } from 'react'
import instance from '../../api'
import {Link} from 'react-router-dom'

const ListActivity = () => {
  const [activities,setActivities] = useState([])

  const getAllActivity =()=>{
    instance.get('/all')
    .then(res=>{  
      console.log(res.data)
      setActivities(res.data)
    })  
    .catch(err=>console.log("error in get all activity",err))
  }
  useEffect(()=>{
  getAllActivity() 
  },[])

 return(
  <div>
    {activities.map(a=>{
      return (
        <div className='border border-dark'  key = {a._id}>
            <Link to ={`/edit/${a._id}`}>
              <h3>{a.title}</h3>
            </Link>
            <p>{a.description}</p>
            <p>{a.date}</p>
            <p>{a.address}</p> 
        </div>
     )
  })}
</div>
)
}
export default ListActivity