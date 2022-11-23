import React from 'react'
import Link from 'next/link'
import {useEffect,useState}from 'react'
import {db} from './firebase-config'
import Header from './header'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function c() {
  const [rolll, setR] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"complaints") ;
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };

    getUsers();
  }, []);
  let  i=-1;
  let  ans=-1;
  let g ;
  console.log(users[0]);
  let display = false ;
  const func = () => {
    i=0;
    users.map((user) => {
       console.log(user.StudentRollNumber);
       i++;
      // let g=user;
      console.log("loop");
      if(user.StudentRollNumber == rolll){
                console.log("working"); 
                g=user.id ;
                ans=i;
                display=true;
      }
    })
    // console.log(rolll);
    if(display==false){
      window.alert("data not found");
    }
    
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
            
        
      
  <div>
  {users.map((user) => {
          if(user.StudentRollNumber===rolll){
            return(<div>
            {""}
              
              <h1>Resolving Date: {user.Date}</h1>
              <h1>Description:  {user.Description}</h1>
              <h1>Status Of Complaint: {user.status}</h1>
              <h1>Available Start Time:  {user.From}</h1>
              <h1>Available End Time:  {user.To}</h1>
              </div>)
            }
          }
          )}
  </div>
  
        </div>
        <div>


        </div>
        <Link href="listAllot">
          <button  class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
    

    </div>
  )
}

export default c