import React from 'react';

function ElectionResults({ electionKey, candidates }) {
  const winner = candidates.reduce((acc, candidate) => {
    return !acc || candidate.votes > acc.votes ? candidate : acc;
  }, null);

  return (
    <div className='bg-blue-600 w-1/3 p-4 flex flex-col justify-center items-center m-4 rounded-md hover:shadow-lg'>
      <h2 className='text-white font-medium text-xl'>{electionKey}</h2>
      {winner && (
        <p className='text-white text-lg'>Winner: {winner.name}</p>
      )}
      <ul className='pt-2'>
        {candidates.map((candidate, index) => (
          <li key={index} className='flex mt-2'>
            <div className='text-lg font-medium'>
              {candidate.name} - {candidate.votes} votes
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ElectionResults;
