import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changedname } from '../reducer/NameSlicer';

function Basic() {
  const [newname,setNewname]=useState('');
  const dispatch=useDispatch();
  const name=useSelector((state)=>state.nameslice.value)
 
  const NameChange=()=>{
    dispatch(changedname(newname))
  }
  return (
    <div>
      {name} 
      <input type="text"  onChange={(e)=>setNewname(e.target.value)}/>
      <button onClick={NameChange}>ChangeName</button> 
    </div>
  )
}

export default Basic