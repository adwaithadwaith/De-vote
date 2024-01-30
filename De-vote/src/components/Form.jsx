import React from 'react'




function Form() {
  return (
    <form action="" className=' bg-blue-200 block my-10 shadow-gray-300 mx-auto max-w-[600px] max-h-[800px] rounded-lg p-[40px] hover:shadow-lg'>
        <h1 className=' mb-4 text-2xl text-blue-600 font-semibold'>Candidate Registration</h1>
        
        <input className=' flex flex-col  w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' type="text" placeholder='First Name' name="" id="" />
    
        <input className=' flex flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' type="text" name="" placeholder='Middle Name' id="" />
        <input className=' flex  flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' type="text" name="" placeholder ='Last Name' id="" />
        <input className=' flex  flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' type="text" name="" id="" placeholder='Department' />
        {/* <input type="year" name="" id="" placeholder=''/> */}
        {/* Add input field for specifying studying year */}
        <input className=' flex  flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' type="text" name="" id="" placeholder='Election Type' /> 
        {/* make it drop down */}
        <input className=' flex  flex-col w-[100%] my-[10px] mx-auto p-[20px] border border-s-[#ddd] h-3 rounded-md focus:outline-0 focus:border-blue-800' type="text" name="" id="" placeholder='Party' />

        <button className=' bg-blue-600 text-white w-auto p-2 rounded-lg hover:bg-blue-700 hover:shadow-md '>Add Candidate</button>

    </form>
  )
}

export default Form
