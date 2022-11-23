import React from 'react'
import Link from 'next/link'
import Header from './header'
import {useEffect,useState}from 'react'
function listAllot() {
  return (
    <div>
      <Header />
        <div class="space"></div>
        <div class="space2"></div>
        
<Link href="a">
        <button class="val3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Room Allotment Status
        </button>
        </Link>
        <Link href="b">
        <button class="val3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Room Swap Status
        </button>
        </Link>
        <Link href="c">
        <button class="val3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Complaint Status
        </button>
        </Link>
        <Link href="panel_student">
          <button  class="val3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>

    </div>
  )
}

export default listAllot