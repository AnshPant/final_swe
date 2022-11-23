import React from 'react'
import Link from 'next/link'
import {useEffect,useState}from 'react'
import Header from './header'


function manager() {
  const [dd, setD] = useState("");
  const [desc, setDesc] = useState("");

  const b = () => {
    window.alert("Success");
  }
  const de = () => {
    console.log(desc);
    window.alert("Successfully deleted");
  }

  const deleted = () => {
    console.log(dd);
    window.alert("deleted");
  }
  return (
    <div>
        <div>
          <Header />
        </div>
        <div class="space"></div>
                {/*  */}
                <div class="valed">
                <div class="ll max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkfZh0Sh8bnPr055q9ZJn9qXUQrrhnzMg6A&usqp=CAU"  />
        <div class="px-6 py-4">
        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
  You are present in Complaint-Manager section
</span>
<span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
  Complaint Manager ID also work in Warden-Section
</span>
        </div>
        </div>
                </div>
                
        <div class="space2"></div>
      <div class="manage">
      <button onClick={b} class="md:font-bold val22  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View all complaints to be handled.
        </button>
        <div>
            <label  class="md:font-bold block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Roll Number whose  request has to be deleted. </label>
            <input value={dd} onChange={(e) => setD(e.target.value)} type="text" id="rollD" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs021" required />
        </div>
        <button onClick={deleted} class="val22  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete.
        </button>

        <div>
            <label  class="md:font-bold bold block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter details in the placeholder format. </label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rejected/Delted/Resolved- DESCRIPTION" required />
        </div>
        <button onClick={de} class="val22  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit.
        </button>
        <div class="mani">
        <Link href="run">
          <button  class="val22  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
        </div>
      </div>
      <div class="space2"></div>
    </div>
  )
}

export default manager