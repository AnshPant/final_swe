// import { initializeApp } from "firebase/app";
// import {getFirestore} from '@firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyCajGIpuz-1gdTkalzGM3iTLaG0-wunBYM",
//   authDomain: "swe-hostelandcomplaint.firebaseapp.com",
//   projectId: "swe-hostelandcomplaint",
//   storageBucket: "swe-hostelandcomplaint.appspot.com",
//   messagingSenderId: "402049354453",
//   appId: "1:402049354453:web:b94ef39484a64d783e305c",
//   measurementId: "G-TBQG0JTGJ5"
// };

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore()
// // import { initializeApp } from "firebase/app";
// // import { getAuth , GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth  } from 'firebase/auth'

// // import { getFirestore } from 'firebase/firestore'; 

// const firebaseConfig = {
//   apiKey: "AIzaSyCajGIpuz-1gdTkalzGM3iTLaG0-wunBYM",
//   authDomain: "swe-hostelandcomplaint.firebaseapp.com",
//   projectId: "swe-hostelandcomplaint",
//   storageBucket: "swe-hostelandcomplaint.appspot.com",
//   messagingSenderId: "402049354453",
//   appId: "1:402049354453:web:b94ef39484a64d783e305c",
//   measurementId: "G-TBQG0JTGJ5"
// };


// // const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);
// // 
// // export

// // const auth = getAuth()

// export {app,provider}

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

  apiKey: "AIzaSyCajGIpuz-1gdTkalzGM3iTLaG0-wunBYM",
  authDomain: "swe-hostelandcomplaint.firebaseapp.com",
  projectId: "swe-hostelandcomplaint",
  storageBucket: "swe-hostelandcomplaint.appspot.com",
  messagingSenderId: "402049354453",
  appId: "1:402049354453:web:b94ef39484a64d783e305c",
  measurementId: "G-TBQG0JTGJ5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 const db = getFirestore(app);
 const provider = new GoogleAuthProvider();
export {provider,auth,db}

// const analytics = getAnalytics(app);