import { Button, TextField, Typography } from '@mui/material'
import { color } from '@mui/system';
import React, { useState } from 'react'
import useForm from './Todoread';

const Listtodo = () => {

    var [item,setitem] = useForm({Name:"",quantity:"",price:0});
    var [items,setitems] = useState([]);

    const addarr = ()=>{
        setitems([...items,item])
    }

  return (
    <div>
      <Typography variant='h4'>ToDo Useform</Typography>
      <TextField name="Name" onChange={setitem} variant='outlined' label='Add Item'></TextField>
      <br></br>
      <br></br>
      <TextField name="quantity" onChange={setitem} variant='outlined' label='Add Quantity'></TextField>
      <br></br>
      <br></br>
      <TextField name="price" onChange={setitem} variant='outlined' label='Add Price'></TextField>
      <br></br>
      <br></br>
      <Button onClick={addarr} variant='contained'>ADD</Button>
      <br></br>
      <br></br>
      <div>
        {
        items.map((value)=>{
            return(
                <div>
                    <Typography variant='p'>{item.Name}</Typography>
                    <br></br>
                    <Typography variant='p'>{item.quantity}</Typography>
                    <br></br>
                    <Typography variant='p'>{item.price}</Typography></div>
            )
        })
        }
      </div>
    </div>
  )
}

export default Listtodo
