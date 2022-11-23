import React from 'react'
import Link from 'next/link'
import {useEffect,useState}from 'react'
import { db } from "./firebase-config";
  import Header from './header'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

//start ------------
function student() {
  const [namee, setN] = useState("");
  const [rolll, setR] = useState("");
  const [pre, setP] = useState("");
  const [type, setT] = useState("");
  const [phone, setPhone] = useState("");
  const [con, setCon] = useState("");
  const [pphone, setPphone] = useState("");
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [rom, setRom] = useState();
  const usersCollectionRef = collection(db, "users");
  const usersCollectionRef2 = collection(db, "flag");
  const usersCollectionRef3 = collection(db, "rooms");
  
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef2);
      const data2 = await getDocs(usersCollectionRef3);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setUsers2(data2.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };

    getUsers();
  }, []);
  
// console.log(users);
  const createUser = async () => {
    let word = pre+"_"+type ;
    let rom ;
    const userrDoc = doc(db, "rooms", "PsQHokqNfW2KjgB5oKY9");
    if(word=='BH1_Double' && users2[0].BH1_Double >0 ){
      
      let ini = users2[0].BH1_Double-0.5 ;
      rom=Math.ceil(users2[0].BH1_Double);
      
    const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
    }
    else if(word=='BH1_Single' && users2[0].BH1_Single >0 ){
      let ini = users2[0].BH1_Single-1 ;
      rom=Math.ceil(users2[0].BH1_Single);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].BH1_Single);  
    }
    else if(word=='BH2_Double' && users2[0].BH2_Double >0 ){
      let ini = users2[0].BH2_Double-0.5 ;
      rom=Math.ceil(users2[0].BH2_Double);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].BH2_Double);  
    }
    else if(word=='BH2_Single' && users2[0].BH2_Single >0 ){
      let ini = users2[0].BH2_Single-1 ;
      rom=Math.ceil(users2[0].BH2_Single);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].BH2_Single);  
    }
    else if(word=='BH3_Double' && users2[0].BH3_Double >0 ){
      let ini = users2[0].BH3_Double-0.5 ;
      rom=Math.ceil(users2[0].BH3_Double);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].BH3_Double);  
    }
    else if(word=='BH3_Single' && users2[0].BH3_Single >0 ){
      let ini = users2[0].BH3_Single-1 ;
      rom=Math.ceil(users2[0].BH3_Single);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].BH3_Single);  
    }
    else if(word=='BH4_Double' && users2[0].BH4_Double >0 ){
      let ini = users2[0].BH4_Double-0.5 ;
      rom=Math.ceil(users2[0].BH4_Double);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].BH4_Double);  
    }
    else if(word=='BH4_Single' ){
      window.alert("No single room in BH4");  
    }
    else if(word=='GH_Double' && users2[0].GH_Double >0 ){
      let ini = users2[0].GH_Double-0.5 ;
      rom=Math.ceil(users2[0].GH_Double);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].GH_Double);  
    }
    else if(word=='GH_Single' && users2[0].GH_Single >0 ){
      // console.log(Math.ceil(users2[0].GH_Single));
      let ini = users2[0].GH_Single-1 ;
      rom=Math.ceil(users2[0].GH_Single);
      const newFields = { BH1_Double: ini  };
    
      await addDoc(usersCollectionRef, { Name: namee, RollNo: rolll , HostelPreference: pre, Seater: type, PhoneNumber: phone,ParentNumber: pphone , room: rom , status: "Alloted" });
      await updateDoc(userrDoc, newFields);
      // window.alert(users2[0].GH_Single);  
    }
    else {
      window.alert('Selected preference of room is either filled or not available. Try different combination to allot room.');
      console.log("Selected preference of room is either filled or not available. Try different combination to allot room.");
    }
   
  };
  const ff = () => {
     
      createUser;
  }

  const initialValues = {
    namee: "",
    rolll: "",
    pre: "",
    };

  const func = () => {
    console.log(namee);
    console.log(rolll);
    console.log(pre);
    console.log(type);
    let gg= rolll+' '+namee+' '+pre+' '+type ;
    console.log(gg);
    
  }
  const b1 = () => {
    setP('BH1');
    console.log(pre);
  }
  const S = () => {
    setT('Single');
    console.log(type);
  }
  const D = () => {
    setT('Double');
    console.log(type);
  }
  const b2 = () => {
    setP('BH2');
    console.log(pre);
  }
  const b3 = () => {
    setP('BH3');
    console.log(pre);
  }
  const b4 = () => {
    setP('BH4');
    console.log(pre);
  }
  const gh = () => {
    setP('GH');
    console.log(pre);
  }

  return (
    <div>
      <Header />
      <div class="space"></div>
        <div>
        {users.map((user) => {
          return(<div>
            <h1>Are room allotment open? : {user.flag}</h1>
            {console.log(user.BH1_Double)}
          </div>)
        })}
      </div>
      <div>

      </div>
      <set2>
        
      <div>
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Roll Number</label>
            <input value={rolll} onChange={(e) => setR(e.target.value)} type="text" id="roll" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20ucs023" required />
        </div>
        <div>
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Enter Name</label>
            <input value={namee} onChange={(e) => setN(e.target.value)} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ansh Pant" required />
        </div>
        


        <div>
            
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Hostel Preference</label>
            {/* <input value={pre} onChange={(e) => setP(e.target.value)} type="text" id="prefer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BH4" required /> */}
            <div class="flex items-center mb-4">
    <input id="default-radio-1" onClick={b1} type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">BH1</label>
</div>
  
<div class="flex items-center mb-4">
    <input id="default-radio-2" onClick={b2} type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">BH2</label>
</div>

  
<div class="flex items-center mb-4">
    <input id="default-radio-3" onClick={b3} type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">BH3</label>
</div>
<div class="flex items-center mb-4">
    <input id="default-radio-4" onClick={b4}type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">BH4</label>
</div>
<div class="flex items-center mb-4">
    <input id="default-radio-5" onClick={gh} type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">GH</label>
</div>
        </div>
        <div>
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Seater Type: Double or Single</label>
            {/* <input value={type} onChange={(e) => setT(e.target.value)} type="text" id="typ" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Double" required /> */}
            <div class="flex items-center mb-4">
    <input id="default-radio-11" onClick={S} type="radio" value="" name="default-radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Single</label>
</div>
<div class="flex items-center mb-4">
    <input id="default-radio-12" onClick={D} type="radio" value="" name="default-radio2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Double</label>
</div>

        </div>
        <div>
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Student Phone number</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="9898987542" required />
        </div><div>
            <label  class="block mb-2 text-sm font-large text-gray-900 dark:text-gray-900">Parent Phone Number</label>
            <input value={pphone} onChange={(e) => setPphone(e.target.value)} type="text" id="Pphone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8975987542" required />
        </div>
        
        <div>
            
      <Link href="panel_student">  
      <button onClick={createUser} class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Proceed
  </button>
  </Link>
        </div>
        <Link href="panel_student">
          <button  class="ad bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button></Link>
        
      </set2>  
        


    </div>
  )
}

export default student