import React from 'react';
import ElectionCard from '../components/ElectionCard';
import candidatesData from '../json/candidates.json'; // Adjust the path as necessary

function Dashboard() {
  return (
    <div className='max-w-[1000px] mx-auto my-[8%] py-5 px-8 bg-blue-200 rounded-lg flex flex-wrap justify-around'>
      {Object.keys(candidatesData).map((electionKey) => (
        <ElectionCard key={electionKey} cardname={`${electionKey}`} candidates={candidatesData[electionKey]}/>
      ))}
    </div>
  );
}

export default Dashboard;
