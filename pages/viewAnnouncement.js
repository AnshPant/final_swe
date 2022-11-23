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
} from "firebase/firestore";//

function viewAnnouncement() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"Announcements") ;
  
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

    <div>
        {users.map((user) => {
          return(<div>
            {""}<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    
            <div class="font-semibold text-l"> Title: {user.Title}</div>
            <div class="font-semibold text-l"> Content: {user.Content}</div>
            </div>
  
</div>
          </div>)
        })}
      </div>
  
{/* end */}
        

        <Link href="run">
        <button class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log Out
        </button>
        </Link>
    </div>
  )
}

export default viewAnnouncement