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
} from "firebase/firestore";//

function swappy() {
  const [rolll, setR] = useState("");
  const [roll2, setR2] = useState("");
  const [hostel, setH] = useState("");
  const [room, setRo] = useState("");
  const [l2, setL1] = useState("");
  const [l1, setL2] = useState("");
  const [roll22, setR22] = useState("");
  const [hostel2, setH2] = useState("");
  const [room2, setRo2] = useState("");
  const [dd, setD] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"Swap") ;
  const [users2, setUsers2] = useState([]);
  const usersCollectionRef2 = collection(db,"users") ;
  const [display, setDisp] = useState(false);
  const [sroll, setSroll] = useState();
  const [shostel, setShostel] = useState("");
  const [sroom, setSroom] = useState();
  const [broll, setBroll] = useState("");
  const [broom, setBroom] = useState();
  const [bhostel, setBhostel] = useState("");
  // let sroll,sroom,shostel,broll,broom,bhostel ;
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const data2 = await getDocs(usersCollectionRef2);
      setUsers2(data2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };

    getUsers();
  }, []);
  
  const a = () => {
    console.log(rolll);
    setL1("hi");
    console.log("l1 is"+l1);
    let l2 = users[0].Student2;
    
    users2.map((user) => {
      if(user.RollNo===l1 ){
        setSroll(user.RollNo);
        setSroom(user.room);
        setShostel(user.HostelPreference);
        }
        if(user.RollNo===l2 ){
          console.log("enter")
          setBroll(user.RollNo)
          setBroom(user.room);
          setBhostel('drink');  
          console.log(bhostel);
          console.log("enter");
          

        }
      }
      )
      console.log("hi");
      console.log(sroll);
      console.log(shostel);
      console.log(bhostel);
    window.alert("Displayed");
  }
  

  const b = () => {
    // console.log(users[0].Student1);
    setDisp(true);
    // window.alert(display);
  }
  const bb = () => {
    setDisp(false);
  }
  const deleted = () => {
    console.log(dd);
    window.alert("deleted");
  }

  const func1 = () => {
    let g = roll2+' '+hostel+' '+room ;
    let g2 = roll22+' '+hostel2+' '+room2 ;

    console.log(g);
    console.log(g2);
    window.alert("Successfully swapped");
  }
  return (
    <div>
      <Header />
        <div class="space"></div>
        <div class="tok">
        <button onClick={b} class="mani bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View all swap allot request.
        </button>
        
        
        <div>
  {users.map((user) => {
          if( display==true){
            return(<div>
            {""}
              {/* console.log(user); */}
              <k>
              <h1>Swap Request:-</h1>
              <h1>Roll Number-1: {user.Student1}</h1>
              <h1>Roll Number-2: {user.Student2}</h1>
              
              </k>
              
              
              <div class="mani"> 
              <button onClick={bb} class="mani bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to stop viewing.
        </button>
              
              </div>
              </div>)
            }
          }
          )}

  </div>
  <div class="mani">
            <label  class="md:font-bold block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Roll Number</label>
            <input value={rolll} onChange={(e) => setR(e.target.value)} type="text" id="roll" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs023" required />
        </div>
        <div class="mani">
        <button onClick={a} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to view above roll number's  room swap request.
        </button>
        

        </div>
        {/*  */}
        
        <div>
        <div class="mani max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">For Student1</div>
    <p class="text-gray-700 text-base">
{/*  */}
{users.map((user) => {
          if(user.RollNo=={l1} ){
            return(<div>
            {""}
              {/* console.log(user); */}
              <h1>Roll: {user.RollNo}</h1>
              <h1>Hostel: {user.HostelPreference}</h1>
              <h1>Seater: {user.Seater}</h1>
              <h1>Room Number: {user.room}</h1>
              
              
              
              
              
              </div>)
            }
          }
          )}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    
  </div>
</div>
        </div>
        {/*  */}
        
        
        <div>
        <div class="mani max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">For Student2</div>
    <p class="text-gray-700 text-base">
      
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
  </div>
</div>

        </div>
        <div class="mani">
        <button onClick={func1} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click to Swap above rooms.
        </button>
      

        </div>
          <div class="mani">
            <label  class="md:font-bold block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Roll Number whose room swap request has to be deleted. </label>
            <input value={dd} onChange={(e) => setD(e.target.value)} type="text" id="rollD" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs021" required />
        </div>
        <div class="mani">
        <button onClick={deleted} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete.
        </button>
          
        </div><div class="mani">
        <Link href="warden_login">
          <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>

          </div>
        
        </div>
        
    </div>
  )
}

export default swappy