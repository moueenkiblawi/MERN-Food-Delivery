/* eslint-disable react/prop-types */
import { useState } from 'react'
import './list.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

function List({url}) {
  const [list, setList] = useState([])
  
  const fetchList = async()=>{
    const response=await axios.get(`${url}/api/food/list`)
    console.log(response.data.data)

    if(response.data.success){

      setList(response.data.data)
    }else{
      toast.error(response.data.message)
    }
  }

  const removeFood = async(FoodId)=>{
  console.log(FoodId)
    const response = await axios.post(`${url}/api/food/remove`,{id:FoodId})
    
        if(response.data.success){
          setList(list.filter((item)=> item._id !== FoodId))
          toast.success("Removed Successfully")
        }else{
            toast.error(response.data.message);
        }
     
  }

  useEffect(()=>{
    fetchList();
  },[])
  return (
    <div className='list add flex-col'>
        <p>All Foods List</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>  
            {list.map((item,index)=>{
              return(
                <div key={index} className="list-table-format">
                    <img src={`${url}/images/`+item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <p className='cursor' onClick={()=>{removeFood(item._id)}}>X</p>
                </div>
              )
            })}
        </div>      
    </div>
  )
}

export default List