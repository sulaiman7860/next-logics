
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqPGZTkupkwzQMdNr0O1PgtF1l6E3WBj0",
  authDomain: "my-firebase-web-c2926.firebaseapp.com",
  projectId: "my-firebase-web-c2926",
  storageBucket: "my-firebase-web-c2926.appspot.com",
  messagingSenderId: "844583292423",
  appId: "1:844583292423:web:7ea09dcbed84a0d16824a2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
