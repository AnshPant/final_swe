import React from 'react'
import Link from 'next/link'
import {useEffect,useState}from 'react'
import axios from 'axios';
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

function RoomSwap() {

  const [roll, setR] = useState("");
  const [roll2, setR2] = useState("");

  const usersCollectionRef = collection(db, "Swap");
  

    const  func = async () => {
      await addDoc(usersCollectionRef, { Student1: roll, Student2: roll2, Status: "Not yet viewed" });
      window.alert("Succesfully added a request.");
      
    }
  return (
    <div>
      <Header />
        <div class="space"></div>
        
      <div class="jjj manage">
      <label  class="md:font-bold block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">First physically confirm room swapping with the student living in the target room. You will be appointed a time to visit warden office. </label>
            <label  class="md:font-bold block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Roll Number of Student 1:</label>
            <input value={roll} onChange={(e) => setR(e.target.value)} type="text" id="roll" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs023" required />
        </div>
        
        
        
        <div class="jjj manage">
            <label  class="md:font-bold block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Roll Number of Student 2:</label>
            <input value={roll2} onChange={(e) => setR2(e.target.value)} type="text" id="roll2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20uec129" required />
        </div>
        <div className='l' class="manage mani">
        
        <Link href="panel_student">
          <button onClick={func} class="md:font-bold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Request
        </button></Link>
        </div>
        
<div class="manage mani">
<Link href="panel_student">
          <button  class="md:font-bold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
        
</div>
        

    </div>
  )
}

export default RoomSwap