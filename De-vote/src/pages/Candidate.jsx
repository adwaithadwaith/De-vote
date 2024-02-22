import React, { useState, useEffect, useMemo } from 'react';
import Form from '../components/Form';
import TableCandidates from '../components/TableCandidates';

function Candidate() {
  const [candidateData, setCandidateData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/candidate');
        if (!response.ok) {
          throw new Error('Failed to fetch candidate data');
        }
        const data = await response.json();
        setCandidateData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      header: 'candidate ID',
      accessorKey: 'id',
      footer: 'ID',
      accessorFn: (row) => row.candidateID, // Accessor function to retrieve ID from row
    },
    {
      header: 'Name',
      accessorFn: (row) => `${row.firstName} ${row.middleName} ${row.lastName}`, // Accessor function to concatenate name
    },
    {
      header: 'Party',
      accessorKey: 'partyName',
      footer: 'Party',
      accessorFn: (row) => row.party, // Accessor function to retrieve party
    },
    {
      header: 'Election Type',
      accessorKey: 'electionType',
      footer: 'Election Type',
      accessorFn: (row) => row.electionType, // Accessor function to retrieve election type
    },
  ];
  

  return (
    <>
      <div>
        <Form />
      </div>
      <div className='max-w-[80%] m-auto p-10 bg-blue-200 rounded-md hover:shadow-lg'>
        <TableCandidates data={candidateData} columns={columns} />
      </div>
    </>
  );
}

export default Candidate;
