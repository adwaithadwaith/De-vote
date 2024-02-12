import React from 'react';

function ElectionCard({ cardname, candidates }) {
  const handleVote = () => {
    alert("Vote submitted!"); 
  };

  return (
    <div className='bg-blue-600 w-1/3 p-4 flex flex-col justify-center items-center m-4 rounded-md hover:shadow-lg'>
      <h2 className='text-white font-medium'>{cardname}</h2>
      <form>
        {candidates.map((candidate, index) => (
          <div key={index}>
            <label>
              <input type="radio" name="candidate" value={candidate.name} />
              {candidate.name}
            </label>
          </div>
        ))}
        <button type="button" onClick={handleVote} className="mt-4 p-2 bg-green-500 text-white rounded">Vote</button>
      </form>
    </div>
  );
}

export default ElectionCard;
