import React from "react";
 import {auth} from "./firebase-config";
import { provider } from "./firebase-config";
import { getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
import Link from 'next/link';
import { useState,useEffect } from "react";

import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/router"


// import {GoogleAuthProvider, getAuth  } from 'firebase/auth'

function login(){
    const [user,setUser] = useState(null)
    const router = useRouter()
  
    useEffect(()=>{
      return onAuthStateChanged(auth,(data)=>{
        if(data == null){
            console.log("aleert")
        }
        else if(data.email == "20ucs109@lnmiit.ac.in" || data.email == "20ucs023@lnmiit.ac.in"){
            // windows.alert("logged in as student")
            router.push('/warden_login')
         }

         else if(data){
            console.log(data);
            router.push('/panel_student')
         }
else{
    console.log("bitch")
}
      })})
  
    const signInWithGoogle = () => {
        signInWithPopup(auth,provider)
         
    };
    return (
        <div >
        <h1>Sign In With Google to Continue</h1>
        <button onClick={signInWithGoogle}>
        SIGN IN WITH GOOGLE
        </button>
        </div>
    )
        
}
export default login