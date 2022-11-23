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

function complaint() {
  // const [namee, setN] = useState("");
  const [desc, setD] = useState("");
  const [fromm, setFromm] = useState("");
  const [too, setToo] = useState("");
  const [Date, setDate] = useState("");
  const [rolll, setRoll] = useState("");
  const [type, setT] = useState("");
  const [phone, setP] = useState("");
  const [site, setSite] = useState("");

  const usersCollectionRef = collection(db, "complaints");

  const func = async () => {
    await addDoc(usersCollectionRef, { TypeOfComplaint: type , StudentRollNumber: rolll , Location: site, From: fromm,To: too, Date: Date, Student_Phone: phone,Description: desc, status: "Not Yet Viewed" });
    window.alert("Jay Hind!");
  }

  return (
    <div>
        <Header />
        <div class="space"></div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Compalint Type:-</label>
            <input value={type} onChange={(e) => setT(e.target.value)} type="text" id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Electiric/Plumbing/IT/Furniture" required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Roll:- </label>
            <input value={rolll} onChange={(e) => setRoll(e.target.value)} type="text" id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs023" required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Description:- </label>
            <input value={desc} onChange={(e) => setD(e.target.value)} type="text" id="desc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="LAN PORT NOT WORKING and some more specification." required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Site Of Complaint</label>
            <input value={site} onChange={(e) => setSite(e.target.value)} type="text" id="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BH4 A207" required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Date</label>
            <input value={Date} onChange={(e) => setDate(e.target.value)} type="text" id="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20/10/2022" required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">From (time)</label>
            <input value={fromm} onChange={(e) => setFromm(e.target.value)} type="text" id="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10:00 AM" required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">To (time)</label>
            <input value={too} onChange={(e) => setToo(e.target.value)} type="text" id="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="11:59 PM" required />
        </div>
        <div class="tok">
            <label  class="md:font-bold  block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Phone Number</label>
            <input value={phone} onChange={(e) => setP(e.target.value)} type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9866987869" required />
        </div>
        <div className='l tok'>
        <button onClick={func} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        </div>
        <div className='tok'>
        <Link href="panel_student">
          <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
        </div>
        
    </div>
  )
}

export default complaint