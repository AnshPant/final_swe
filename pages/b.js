import React from 'react'
import Link from 'next/link'
import {useEffect,useState}from 'react'
import Header from './header'
function b() {
  const [rolll, setR] = useState("");

  const func = () => {
    
    console.log(rolll);
    window.alert("successfully clicked the button");
  }
  return (
    <div>
      <Header />
        <div class="space"></div>
        
      <div class="tok">
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Roll Number</label>
            <input value={rolll} onChange={(e) => setR(e.target.value)} type="text" id="roll" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs023" required />
      </div>
      
      <div class="tok">
            
        
      <button onClick={func} class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View Satus
  </button>
  
        </div >
        <div class="tok">
        <Link href="listAllot">
          <button  class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
    
        </div>
        

    </div>
  )
}

export default b