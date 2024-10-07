// import React, { useEffect, useState } from 'react'

// function Apiprint() {
//   const [data,setData] = useState([])
//   const [filterdata,setFilterdata] = useState([])
//   const [gender,setGender] = useState('men')
//   const url = 'https://www.mockachino.com/5db99bd2-28c5-46/ipl/table'

//   const fetchdata = async()=>{
//     const response = await fetch(url)
//     const result = await response.json()
//     setData(result.points)
//   }

//   const handleFilter = ()=>{
//     const filterred = data.filter(ipl=>ipl.Gender.toLowerCase() === gender.toLowerCase() && ipl.IPLYear === 2022)
//     setFilterdata(filterred)
//   }
//   useEffect(()=>{
//     fetchdata(url)
//   },[])
//   return (
//     <div>
//       <select value={gender} onChange={(e)=>setGender(e.target.value)}>
//         <option>men</option>
//         <option>women</option>
//       </select>
//       <button onClick={handleFilter}>Click</button>
//       <div>
//         {filterdata.map((item,index)=>(
//           <h1 key={index}>{item.TeamName}</h1>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Apiprint











import React, { useState } from 'react'
import {QueryClient,QueryClientProvider,useQuery} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()
const fetchIplData = async () => {
  const url = 'https://www.mockachino.com/5db99bd2-28c5-46/ipl/table'
  const response = await fetch(url)
 const result = await response.json()
 return result
}

function Apiprint() {
  const [gender, setGender] = useState('men')
  const [filterdata, setFilterdata] = useState([])
  const { data } = useQuery({
    queryKey: ['iplData'],
    queryFn: fetchIplData,
  })
  const handleFilter = () => {
      const filtered = data.points.filter((ipl) => ipl.Gender.toLowerCase() === gender.toLowerCase() && ipl.IPLYear === 2022)
      setFilterdata(filtered)
  }



  return (
    <div>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
      <button onClick={handleFilter}>Click</button>
      <div>
        {filterdata.map((item, index) => (
          <h1 key={index}>{item.TeamName}</h1>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Apiprint />
    </QueryClientProvider>
  )
}





// import React, { useEffect, useState } from 'react'

// function Apiprint() {
//   const [data,setData] = useState([])
//   const url = 'https://www.mockachino.com/5db99bd2-28c5-46/ipl/table'
//   const fethcApi = async()=>{
//     const response = await fetch(url)
//     const result = await response.json();
//     setData(result.points)
//   }
//   useEffect(()=>{
//     fethcApi()
//   },[])
//   return (
//     <div>
//       <select>
//         <option>men</option>
//         <option>women</option>
//       </select>
//       {data.map((item,index)=>{
//         <div key={index}>
//           <h1>{item.TeamName}</h1>
//           <p>{item.IPLYear}</p>
//         </div>
//       })}
//       <button onClick={fethcApi}>Call API</button>
//     </div>
//   )
// }

// export default Apiprint
