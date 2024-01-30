import React,{useMemo} from 'react'
import Table from '../components/Table'
import voterdata from '../json/voterdata.json'

function Voter() {

    const data = useMemo(() => voterdata, [])

    /** @type import('@tanstack/react-table').ColumnDef<any> */
    const columns = [
      {
        header: 'ID',
        accessorKey: 'id',
        footer: 'ID',
      },
      {
        header: 'Name', 
        accessorKey : 'name'
        
      },
      
      {
        header: 'Department',
        accessorKey: 'department',
        footer: 'Department',
      },
      {
        header: 'KTU ID',
        accessorKey: 'KTUId',
        footer: 'KTU ID',
      },
      
    ]
  

  return (
    <div>
        <div className=' max-w-[80%] m-auto p-10 bg-blue-200 rounded-md hover:shadow-lg mt-16'>
   <Table data={voterdata} columns={columns} />
   </div>
      
    </div>
  )
}

export default Voter
