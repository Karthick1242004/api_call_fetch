import React, { useState } from 'react'

function Apicall() {
    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')
    const url = 'https://devsquad-api.onrender.com/api/auth/login'
    const loginCall = async()=>{
        try{
            const response = await fetch(url,{
                method: 'POST',
                headers:{ 'Content-type': 'application/json'},
                body: JSON.stringify({email:user , password:pass,})
            })
            const result = await response.json()
            if(response.ok)
            {
                console.log("Successful Login",result)
            }
            else{
                consol.log("Failed Login",result.message)
            }
        }
        catch(error)
        {
            console.error("Error fetching API",error)
        }
    }
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
      <lable>UserName</lable>
      <input onChange={(e)=>setUser(e.target.value)} value={user} placeholder='enter ur name here' type='text'/>
      <lable>Password</lable>
      <input onChange={(e)=>setPass(e.target.value)} value={pass} placeholder='enter ur pass here' type='password'/>
      <button onClick={loginCall}>Login</button>
    </div>
  )
}

export default Apicall
