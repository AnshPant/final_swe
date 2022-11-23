import React from 'react'
import Link from 'next/link'
import Header from './header'
import {auth} from './firebase-config'
import { signOut } from 'firebase/auth';
import {onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router"
function panel_student() {
    const router = useRouter();

    const signUserOut = () => {
        signOut(auth).then(() => {
            window.alert("logged out")
            router.push('/run')
        });
      };
  return (
    <div>
        
        <Header />
        <div class="space"></div>
                {/*  */}
                <div class="valed">
                <div class="ll max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6ak3rXlD8EKpmb7Ad2BnAI-hYB5ETdjO2Q&usqp=CAU" alt="Sunset in the mountains" />
        <div class="px-6 py-4">
        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
  You are present in STUDENT section
</span>
        </div>
        </div>
                </div>
                
        <div class="space2"></div>
        {/*  */}
    <div className=' flex-container'>
        
        <Link href="student">
        <button class="val2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Request Room Allotment
        </button>
        </Link>
        <Link href="complaint">
        <button class="val2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            File a Complaint
        </button>
        </Link>
        <Link href="Contact">
        <button class="val2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View important contacts.
        </button>
        </Link>
        <Link href="listAllot">
        <button class="val2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Query Status
        </button>
        </Link>
        <Link href="RoomSwap">
        <button class="val2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Request Room Swap
        </button>
        </Link>
        <button onClick={signUserOut} class="val2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log Out
        </button>
    </div>
    </div>
  )
}

export default panel_student