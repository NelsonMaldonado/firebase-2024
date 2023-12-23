// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUu2UEOXctKB857-HSQ2Rh0CSlJfV0O-U",
  authDomain: "fir-2024-b4760.firebaseapp.com",
  projectId: "fir-2024-b4760",
  storageBucket: "fir-2024-b4760.appspot.com",
  messagingSenderId: "707716970504",
  appId: "1:707716970504:web:87575d5bccbf802e37b9bd",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export default getFirestore()
