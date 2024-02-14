import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    department: '',
    electionType: '',
    party: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/candidate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Candidate registration successful
        const responseData = await response.json();
        console.log('Registered Candidate:', responseData.candidate);
        // Optionally, reset the form
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          department: '',
          electionType: '',
          party: ''
        });
      } else {
        // Candidate registration failed
        console.log('Candidate registration failed');
      }
    } catch (error) {
      console.error('Error registering candidate:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='bg-blue-200 block my-10 shadow-gray-300 mx-auto max-w-[600px] max-h-[800px] rounded-lg p-[40px] hover:shadow-lg'>
      <h1 className='mb-4 text-2xl text-blue-600 font-semibold'>Candidate Registration</h1>
      
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className='flex flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' />
      <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Middle Name" className='flex flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className='flex flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' />
      <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className='flex flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' />
      <input type="text" name="electionType" value={formData.electionType} onChange={handleChange} placeholder="Election Type" className='flex flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' />
      <input type="text" name="party" value={formData.party} onChange={handleChange} placeholder="Party" className='flex flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' />
      <button type="submit" className='bg-blue-600 text-white w-auto p-2 rounded-lg hover:bg-blue-700 hover:shadow-md'>Add Candidate</button>
    </form>
  );
}

export default Form;
