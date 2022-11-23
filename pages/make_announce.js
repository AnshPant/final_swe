import React from 'react'
import Link from 'next/link'
import {useEffect,useState}from 'react'
import Header from './header'
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
const make_announce = () => {
    const [type, setT] = useState("");
    const [typee, setTT] = useState("");
    
  const usersCollectionRef = collection(db, "Announcements");

  const func = async () => {
    await addDoc(usersCollectionRef, { Title: type , Content: typee  });
    window.alert("Succesfully Pushed :-) ");
  }
  return (
    <div>
        <Header />
        <div class="space"></div>
        
        <div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Title:-</label>
            <input value={type} onChange={(e) => setT(e.target.value)} type="text" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Electric" required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Content:-</label>
            <input value={typee} onChange={(e) => setTT(e.target.value)} type="text" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Electricity will not be available till 12:00pm tomorrow." required />
        </div>
        <div className='l tok'>
        <button onClick={func} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        </div>

        </div>
        <div className='tok'>
        <Link href="warden_login">
          <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
        </div>

    </div>
  )
}

export default make_announce