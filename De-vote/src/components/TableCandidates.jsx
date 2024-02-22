import React, { useState, useEffect, useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

function TableCandidates({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState('');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const handleDelete = async (candidateID) => {
    try {
      // Show confirmation dialog to confirm deletion
      const isConfirmed = window.confirm('Are you sure you want to delete this candidate?');
  
      // Check if user confirmed deletion
      if (!isConfirmed) {
        // If not confirmed, return without deleting
        return;
      }
  
      // Send the deletion request to the server
      const requestData = {
        candidateID: candidateID
      };
  
      const response = await fetch(`http://localhost:3000/candidate-delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData), 
      });
  
      if (response.ok) {
        // Log success message
        console.log(`Candidate with ID ${candidateID} has been deleted successfully.`);
        
      } else {
        // Log error message if deletion failed
        console.error('Failed to delete candidate:', response.statusText);
      }
    } catch (error) {
      // Log any unexpected errors
      console.error('An unexpected error occurred:', error.message);
    }
  };
  

  return (
    <div className='w3-container'>
      <input
        className='bg-slate-300 border border-blue-700 rounded-sm placeholder:p-1 mb-3 focus:outline-0 focus:shadow-md focus:border-blue-800'
        type='text'
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder='Search'
      />
      <table className='w3-table-all'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {
                        { asc: '🔼', desc: '🔽' }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </div>
                  )}
                </th>
              ))}
              {/* Add the new Delete column header */}
              <th>Delete</th>
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {/* Check if accessorFn exists, if not, use cell value */}
                  {cell.column.columnDef.accessorFn ? cell.column.columnDef.accessorFn(row.original) : cell.value}
                </td>
              ))}
              {/* Change the Verify button to a Delete button */}
              <td>
                <button
                  className='bg-red-500 text-white p-2 rounded-md hover:shadow-md '
                  onClick={() => handleDelete(row.original.candidateID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          className='mt-3 mr-3 bg-blue-600 text-white w-auto p-2 rounded-lg hover:bg-blue-700 hover:shadow-md'
          onClick={() => table.setPageIndex(0)}
        >
          First page
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className='bg-blue-600 m-3 text-white w-auto p-2 rounded-lg hover:bg-blue-700 hover:shadow-md'
        >
          Previous page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className='bg-blue-600 m-3 text-white w-auto p-2 rounded-lg hover:bg-blue-700 hover:shadow-md'
        >
          Next page
        </button>
        <button
          className='bg-blue-600 m-3 text-white w-auto p-2 rounded-lg hover:bg-blue-700 hover:shadow-md'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last page
        </button>
      </div>
    </div>
  );
}

export default TableCandidates;
