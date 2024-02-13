import React from 'react';
import ElectionResults from '../components/ElectionResults'; // Adjust the path as necessary
import electionData from '../json/electionData.json'; // Adjust the path as necessary

function Results() {
  return (
    <div className='flex justify-center'>
      <div className='max-w-[1000px] my-[5%] py-5 px-8 bg-blue-200 rounded-lg flex flex-wrap justify-around'>  
      {Object.entries(electionData).map(([key, candidates], index) => (
        <ElectionResults key={index} electionKey={key} candidates={candidates} />
      ))}
      </div>      
    </div>
  );
}

export default Results;
