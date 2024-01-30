import React from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

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
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className='w3-container'>
      <input
        className='bg-slate-300 border border-blue-700 rounded-sm placeholder:p-1 mb-3 focus:outline-0 focus:shadow-md focus:border-blue-800'
        type='text'
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
        placeholder='search'
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
              {/* Add the new Verify column header */}
              <th>Verify</th>
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              {/* Add the new Verify column with a button */}
              <td>
                <button
                  className='bg-green-500 text-white p-2 rounded-md hover:shadow-md '
                  
                >
                  Verify
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
