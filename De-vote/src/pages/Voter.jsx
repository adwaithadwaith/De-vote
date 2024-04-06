import React, { useMemo } from 'react';
import Table from '../components/Table';
import * as XLSX from 'xlsx';
import voterdata from '../json/voterdata.json';

function Voter() {
  const data = useMemo(() => voterdata, []);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      console.log(jsonData);

      try {
        const response = await fetch('http://localhost:3000/voter-add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        });
        if (response.ok) {
          console.log('Data sent successfully');
        } else {
          console.error('Failed to send data');
        }
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleSubmit = () => {
    const confirmed = window.confirm('Are you sure you want to submit the Excel file? This operation can only be done once.');
    if (confirmed) {
      // Trigger file input click event
      document.getElementById('fileInput').click();
    }
  };

  const columns = [
    {
      header: 'KTU ID',
      accessorKey: 'ktuid',
      footer: 'ID',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Department',
      accessorKey: 'department',
      footer: 'Department',
    },
    {
      header: 'Year',
      accessorKey: 'year',
      footer: 'Year',
    },
    {
      header: 'Mail',
      accessorKey: 'email',
      footer: 'Mail',
    },
  ];

  return (
    <div className="max-w-[90%] flex flex-col items-center h-screen bg-teal">
      <h1 className="text-3xl font-bold mb-8">Voter Data</h1>
      <div className="max-w-[80%] m-auto p-10 bg-blue-200 rounded-md hover:shadow-lg mt-16 mb-8">
        <input id="fileInput" type="file" onChange={handleFile} className="" />
        <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded-md">Submit Excel</button>
      </div>
      <div className="max-w-[90%] m-auto p-10 bg-blue-200 rounded-md hover:shadow-lg mt-16">
        <Table data={data} columns={columns} />
      </div>
    </div>
  );  
}

export default Voter;
