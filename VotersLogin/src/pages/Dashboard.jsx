import React from 'react'
import DashCard from '../components/DashCard'

function Dashboard() {
  return (
    <>
    <div className='relative max-w-[800px] mx-[15%]  my-[8%] py-5 px-8 bg-blue-200 rounded-lg flex flex-wrap justify-around'>
      <DashCard cardname={'Active Elections'} data={1}/>
    </div>
    <div className='top-0 right-0 mt-[10%] w-[300px] bg-blue-100 absolute rounded-lg py-5 px-5 shadow-lg justify-center'>
    <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
    <ul className='space-y-2'>
      <li>Notification 1</li>
      <li>Notification 2</li>
      <li>Notification 3</li>
      <li>Notification 4</li>
    </ul>
  </div>
  </>
  )
}

export default Dashboard
