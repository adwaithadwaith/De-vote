import React from 'react';
import ElectionCard from '../components/ElectionCard';
import candidatesData from '../json/candidates.json'; // Adjust the path as necessary


function Vote() {
  return (
    <>
    <div>
    <div className='relative max-w-[790px] mx-[15%]  mt-[3%] mb-[2%] py-5 px-8 bg-blue-200 rounded-lg flex flex-wrap justify-around'>
      <h2 className='text-lg text-black font-medium'>Active Elections</h2>
      <h2 className='text-lg font-medium text-black'>1</h2>
    </div>
    <div className='max-w-[1000px] mx-[8%] py-5 px-8 bg-blue-200 rounded-lg flex flex-wrap justify-around'>  
      {Object.keys(candidatesData).map((electionKey) => (
        <ElectionCard key={electionKey} cardname={`${electionKey}`} candidates={candidatesData[electionKey]}/>
      ))}
    </div>
    </div>
    <div>
    <div className='top-0 right-0 mt-[10%] w-[300px] bg-blue-100 absolute rounded-lg py-5 px-5 shadow-lg justify-center'>
    <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
    <ul className='space-y-2'>
      <li>Notification 1</li>
      <li>Notification 2</li>
      <li>Notification 3</li>
      <li>Notification 4</li>
    </ul>
    </div>


    
    </div>
    

    
    </>
  );
}

export default Vote;
