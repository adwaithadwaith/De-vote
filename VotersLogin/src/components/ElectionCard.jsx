import React from 'react';

function ElectionCard({ cardname, candidates }) {
  const handleVote = () => {
    alert("Vote submitted!"); 
  };

  return (
    <div className='bg-blue-600 w-1/3 p-4 flex flex-col justify-center items-center m-4 rounded-md hover:shadow-lg'>
      <h2 className='text-white font-medium text-xl'>{cardname}</h2>
      <form className='pt-2'>
        {candidates.map((candidate, index) => (
          <div key={index}>
            <ul>
              <li>
                <div className='flex mt-2 rounded hover:bg-blue-200'>
                <label className='text-lg font-medium'>
              <input className='mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"' type="radio" name="candidate" value={candidate.name} />
              {candidate.name}
            </label>
                </div>
              </li>
            </ul>
            
          </div>
        ))}
        <button type="button" onClick={handleVote} className="mt-4 p-2 bg-green-500 text-white rounded">Vote</button>
      </form>
    </div>
  );
}

export default ElectionCard;
