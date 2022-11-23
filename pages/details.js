import React from 'react'
import Link from 'next/link'
import Header from './header'
import {useEffect,useState}from 'react'
import {db} from './firebase-config'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



function details() {
  const [display, setD] = useState(false);
  const [rolll, setR] = useState("");
  const [users, setUsers] = useState([]);
 
  const usersCollectionRef = collection(db,"users") ;
  
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };

    getUsers();
  }, []);


  const func = () => {
    setD(true);
    window.alert("successfully clicked the button");
    // console.log(rolll);
  }
        

  return (
    <div>
      <Header />
        <div class="space"></div>
        
      <div class="tok">
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Student's Roll Number</label>
            <input value={rolll} onChange={(e) => setR(e.target.value)} type="text" id="roll" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs023" required />
        </div>
          <button onClick={func} class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
        <div>
  {users.map((user) => {
          if(user.RollNo===rolll && display==true){
            return(<div>
            {""}
              {/* console.log(user); */}
              <h1>Name: {user.Name}</h1>
              <h1>Roll Number: {user.RollNo}</h1>
              <h1>Room Number: {user.room}</h1>
              <h1>Student's PhoneNumber: {user.PhoneNumber}</h1>
              <h1>ParentNumber: {user.ParentNumber}</h1>
              
              
              
              
              
              </div>)
            }
          }
          )}
  </div>
        <Link href="warden_login">
          <button  class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>  
    </div>
  )
}

export default details