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




function Contact() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"Contact") ;
  
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };

    getUsers();
  }, []);


  return (
    <div>
        <Header />
        <div class="space"></div>
        
{/* start */}
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Details:-</div>
    <div>
        {users.map((user) => {
          return(<div>
            
            <div class="font-semibold text-l">Name: {user.Name}</div>
            <div class="font-semibold text-l">Position: {user.Position}</div>
            <div class="font-semibold text-l">Hostel: {user.Hostel}</div>
            <div class="font-semibold text-l">PhoneNumber: {user.PhoneNumber}</div>
            <div class="font-semibold text-l">Mail: {user.Mail}</div>
            
          </div>)
        })}
      </div>
  </div>
  
</div>
{/* end */}
        

        <Link href="panel_student">
          <button  class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
        <div class="space2"></div>
    </div>
    
  )
}

export default Contact