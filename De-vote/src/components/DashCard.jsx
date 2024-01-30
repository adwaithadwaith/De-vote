import React from 'react'

function DashCard({cardname,data,}) {
  return (
    <div className=' bg-blue-600 w-1/3 p-4 flex flex-col justify-center items-center m-4 rounded-md hover:shadow-lg'>
      <h2 className=' text-white '>{cardname}</h2>
      
      <h2 className=' text-white'>{data}</h2>
    </div>
  )
}

export default DashCard
