import React, { useEffect, useState } from 'react'

function Apiprint() {
  const [data,setData] = useState([])
  const [filter,setFilter] = useState([])
  const [gender,setGender] = useState('men')

  const url = 'https://www.mockachino.com/5db99bd2-28c5-46/ipl/table'

  const fetchdata = async()=>{
    const response = await fetch(url)
    const result = await response.json()
    setData(result.points)
  }

  useEffect(()=>{
    fetchdata(url)
  },[])
  
  const handleFilter = ()=>{
    const filteredata = data.filter(ipl=>ipl.Gender.toLowerCase()===gender.toLowerCase()&& ipl.IPLYear===2022)
    setFilter(filteredata)
  }
  return (
    <div>
      <select value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option>men</option>
        <option>women</option>
      </select>
      {filter.map((item,index)=>(
        <div key={index}>
          <img src={item.TeamLogo} alt="" />
          <h2>{item.TeamName}</h2>
        </div>
      ))}
      <button onClick={handleFilter}>Click to Apply filter</button>
    </div>
  )
}

export default Apiprint
