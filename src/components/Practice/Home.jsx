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
    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         try{
    //             const response = await axios.get("https://api.agify.io?name=karthick")
    //             setData(response.data)
    //         }
    //         catch(error){
    //             setError(error)
    //         }
    //     }
    //     fetchData()
    // },[])
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






    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const responses = await Promise.all(
    //                 names.map(async (name) => {
    //                     const response = await axios.get(`https://api.agify.io?name=${name}`)
    //                     return { name, data: response.data }
    //                 })
    //             )
    //             setData(responses)
    //         } catch (error) {
    //             setError(error)
    //         }
    //     }
    // fetchData()
    // }, [])

        // const fetchData = async () => {
        //     try {
        //         const responses = await Promise.all(names.map(async (name) => {
        //                 const response = await axios.get(`https://api.agify.io?name=${name}`)
        //                 return { name, data: response.data }
        //             })
        //         )
        //         setData(responses)
        //     } 
        //     catch (error)
        //     {
        //         setError(error)
        //     }
        // }


        // const handleIt = () =>{
        //     fetchData()
        // }
    //    const fetchData = async () =>{
    //     try{
    //         const responses = await Promise.all(names.map(async (name)=>{
    //             const response = await axios.get(`https://api.agify.io?name=${name}`)
    //             return {name, data :response.data}
    //         })
    //         )
    //         setData(responses)
    //     }
    //     catch(error){
    //         setError(error)
    //     }
    //    }
    //    const handleIt = ()=>{
    //     fetchData()
    //     console.log(data)
    //    }
    return (
        <div>
            <input type="text" value={val} onChange={handle} placeholder='enter here' />
            <button type='submit' onClick={submitit}>Click</button>
            {/* <button type='submit' onClick={handleIt}>Click</button> */}
            {/* <h1>API Data</h1>
            {error ? <p>{error.message}</p>: null}
            {data ? <pre>{JSON.stringify(data,null,2)}</pre>: null} */}









            {/* <h4>API Data</h4>
            {error ? <p>{error.message}</p>: null}
            {data.length>0 ? (data.map((items,index)=>{
                   <div key={index}>
                    <pre>{JSON.stringify(item.data,null,2)}</pre>
                   </div>
            })):<p>Loading...</p>} */}
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
