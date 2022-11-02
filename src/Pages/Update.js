import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./update.scss"
export const Update = () => {
  const data={
    id:localStorage.getItem("ID"),
    username:localStorage.getItem("username"),
    email:localStorage.getItem("Email"),
    checkbox:localStorage.getItem("Checkbox value")
  }
  const [values,setValues]= useState(data)
  const {username,email,id,checkbox}= values

  const field={
    id:"",
    username:"",
    email:"",
    checkbox:checkbox
  }
  const [update,setUpdate]= useState(values)

  const handleChange=(e)=>{
    const{name,value}= e.target
    setValues({...data,[name]:value})
    setUpdate({...update,[name]:value})
  }
  console.log(values)
  console.log(update)

  const setItem=(id)=>{
    axios.put(`https://635fd2cdca0fe3c21aa58516.mockapi.io/crudoperation/${id}`,
    {...update}
     )
  }

  return (
    <div className='update-container'>
     <h3>Update the value here</h3>
      <form>
        <input 
         name="username"
         value={username}
         onChange={handleChange}
         placeholder="Name"
        />
         <input 
         name="email"
         value={email}
         onChange={handleChange}
         placeholder="Email"
        />
        <button onClick={setItem(id)} type="submit"> Update</button>

      </form>
    </div>
  )
}

export default Update;