import React ,{useState} from 'react'
import {Form,Button, Checkbox} from 'semantic-ui-react'
import axios from "axios";
import "./create.scss";

export const Create = () => {
  const [checkbox, setCheckbox] = useState(false);
  const field={
    username:"",
    email:"",
    checkbox:checkbox
  }
  
  const [states, setStates]=useState(field)
  
  const{username,email}= states

  const handleChange=(e)=>{
    const {name,value}=e.target
    setStates({...states,[name]:value})
  }

  const sendDataToAPI= ()=>{
    axios.post('https://635fd2cdca0fe3c21aa58516.mockapi.io/crudoperation',
        states
       )
  }
  return (
    <div className='Form-container'>
       <Form className='Form-box'>
        <Form.Field>
        <h3> Enter your details</h3>
        <p>(refresh if name will not visible)</p>
          <label>Name</label>
          <input
              required
              name="username"
              value={username}
              onChange={handleChange}
              type="text" 
              placeholder="Name"/>
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input 
           required
           name="email"
           onChange={handleChange}
           value={email}
           type="email"
          placeholder="Email"/>
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and conditions" onChange={(e)=>setCheckbox(!checkbox)}/>
        </Form.Field>
        <Button onClick={sendDataToAPI} type="submit">Submit</Button>
       </Form>
    </div>
  )
}

export default Create;