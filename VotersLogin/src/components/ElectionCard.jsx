import casteVote from '../utils/vote.js'
import getPositionIndex from '../utils/candidateIndex.js'
import voteContext from '../context/voteContex.js'
import electionData from '../json/electionData.json'
import { useState,useEffect } from 'react'


function ElectionCard({ cardname, candidates}) {

  // const [cardName,setCardName] = useState(cardname)
  // useEffect(()=>{
  //   setCardName(cardName)
  // },[cardName])
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleVote = (account,contract) => {
    
    let candidatePosition = getPositionIndex(electionData,cardname)
    console.log(candidatePosition)
    console.log(selectedCandidate)
    casteVote(account,contract,candidatePosition,selectedCandidate)
    alert("Vote submitted!");

  };

  const handleCandidateSelection = (e) => {
    setSelectedCandidate(e.target.value);
  };


  return (
    <voteContext.Consumer >
       {({ contract, account }) => (
        <div className='bg-blue-600 w-1/3 p-4 flex flex-col justify-center items-center m-4 rounded-md hover:shadow-lg'>
        <h2 className='text-white font-medium text-xl'>{cardname}</h2>
        <form className='pt-2'>
          {candidates.map((candidate, index) => (
            
            <div key={index}>
        
              <ul>
                <li>
                  <div className='flex mt-2 rounded hover:bg-blue-200'>
                  <label className='text-lg font-medium'>
                <input className='mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"' type="radio" name="candidate" value={index}
                      onChange={handleCandidateSelection} />
                {candidate.name}
              </label>
                  </div>
                </li>
              </ul>
              
            </div>
          ))}
          <button type="button" onClick={()=>{handleVote(account,contract)}} className="mt-4 p-2 bg-green-500 text-white rounded">Vote</button>
        </form>
      </div>
      )}
    
    </voteContext.Consumer>
  );
}

export default ElectionCard;
