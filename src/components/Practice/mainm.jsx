import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


function Home() {
    const [val, setVal] = useState("")
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const names = ['karthick', 'karan', 'kamalesh']

    const handle = (e) => {
        setVal(e.target.value)
    }

    const submitit = (e) => {
        e.preventDefault()
        if(!val){
            alert('Fill the field dude')
        }
        else{
        console.log(val)
    }
    }
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const responses = await Promise.all(names.map(async(name)=>{
                    const response = await axios.get(`https://api.agify.io?name=${name}`)
                    return{name , data: response.data}
                }))
                setData(responses)
            }
            catch(error){
                setError(error)
            }
        }
        fetchData()
    },[])
    return (
        <div>
            <input type="text" value={val} onChange={handle} placeholder='enter here' />
            <button type='submit' onClick={submitit}>Click</button>
            <h1>Api data</h1>
            {error ? <p>{error.message}</p>: null}
            {data.length > 0 ? (data.map((items,index)=>{
                <div key={index}>
                    <pre>{JSON.stringify(items.data,null,2)}</pre>
                </div>
            })):<p>error</p>}
        </div>
    )
}

export default Home
