import React from 'react';
import { useNavigate } from 'react-router-dom';
import ElectionCard from '../components/ElectionCard';
import candidatesData from '../json/electionData.json';


function Vote() {
  const navigate = useNavigate();

  const handleButton = () =>{
    navigate('/results');
  }

  return (
    <div className="flex">
      <div className="flex-1"> 
        <div className='relative max-w-[1000px] mx-[8%] mt-[3%] mb-[2%] py-5 px-8 bg-blue-200 rounded-lg flex flex-wrap justify-around'>
          <h2 className='text-2xl text-black font-medium'>Active Elections</h2>
          <h2 className='text-2xl font-medium text-black'>1</h2>
        </div>
        <div className='max-w-[1000px] mx-[8%] py-5 px-8 bg-blue-200 rounded-lg flex flex-wrap justify-around'>  
          {Object.keys(candidatesData).map((electionKey) => (
            <ElectionCard key={electionKey} cardname={`${electionKey}`} candidates={candidatesData[electionKey]}/>
          ))}
        </div>
      </div>
      
      
      <div className="w-[300px] flex flex-col mt-[3%]">
        <div className=' bg-blue-100 rounded-lg py-5 px-5 shadow-lg '>
          <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
          <ul className='space-y-2'>
            <li>Notification 1</li>
            <li>Notification 2</li>
            <li>Notification 3</li>
            <li>Notification 4</li>
          </ul>
        </div>
        <div className='absolute bottom-0'>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButton}
        >
          Get Result
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Vote;
