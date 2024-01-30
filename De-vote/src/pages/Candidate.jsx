import { useMemo } from 'react'
import Form from '../components/Form'
import candidateData from '../json/data.json'
import TableCandidates from '../components/TableCandidates'
function Candidate() {


  const data = useMemo(() => candidateData, [])

  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'ID',
    },
    {
      header: 'Name', accessorFn: row => `${row.firstName} ${row.middleName} ${row.lastName}`
      
    },
    
    {
      header: 'Party',
      accessorKey: 'partyName',
      footer: 'Party',
    },
    {
      header: 'Election Type',
      accessorKey: 'electionType',
      footer: 'Election Type',
    },
    
  ]

  


  return (
    <>
    <div className=''>
      <Form/>
      
    </div>
   <div className=' max-w-[80%] m-auto p-10 bg-blue-200 rounded-md hover:shadow-lg'>
   <TableCandidates data={candidateData} columns={columns} />
   </div>
    
  
  </>
  )
}

export default Candidate
