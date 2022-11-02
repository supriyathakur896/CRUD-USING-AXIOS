import axios from 'axios';
import React, { useEffect,useState} from 'react'
import { Table,Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./Read.scss"

export const Read = () => {
    const [APIData, setAPIdata]= useState([]);
    useEffect(()=>{
        axios.get('https://635fd2cdca0fe3c21aa58516.mockapi.io/crudoperation')
        .then((response)=>{
            console.log(response.data)
            setAPIdata(response.data)
        })    
    },[]);
    const setData= (data)=>{
        let {id,username,email,checkbox}= data;
        localStorage.setItem('ID',id);
        localStorage.setItem('username',username);
        localStorage.setItem("Email",email);
        localStorage.setItem('Checkbox value',checkbox)
    }

    const getData=()=>{
        axios.get("https://635fd2cdca0fe3c21aa58516.mockapi.io/crudoperation")
        .then((getData)=>{
            setAPIdata(getData.data);
        })
    }

    const onDelete=(id)=>{
        axios.delete(`https://635fd2cdca0fe3c21aa58516.mockapi.io/crudoperation/${id}`)
        .then(()=>{
            getData()
        })
    }
  return (
    <div>
         <div className="Table">
        
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.username}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to="/update">
                                    <Table.Cell> 
                                    <Button color="green" onClick={() => setData(data)}>Update</Button>
                                     
                                    </Table.Cell>
                                </Link>
                                    <Table.Cell>
                                        <Button color="red" onClick={()=>onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>
                            </Table.Row> 
                         
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    
    
    </div>
  )
}

export default Read;