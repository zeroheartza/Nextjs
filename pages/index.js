



import React from 'react'
import Link from 'next/link'
import axios from 'axios'

export default function index(props) {
    return (
        <div>
             <p>
            {/* <span>{JSON.stringify(props)}</span> */}
           
             Hello world
             
                
            </p>
             
        </div>

    )
}


// export async function getStaticProps() {
 

   
   
//     const res = await axios.post('http://localhost:8000/api/register', {
//         name: "1",
//         email: "heart11@a.com",
//         password: "aab"
//     })
//     const data =  res.data

  
//     return {
//                 props: {
//                 data: data,
//         },
//     }
// }