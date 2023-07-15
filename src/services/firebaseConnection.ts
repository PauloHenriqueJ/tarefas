
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCoU08ZvxJE8SVTJbu-Cx6zrhHDm2BS3gI",
  authDomain: "tarefaplus-b3ce4.firebaseapp.com",
  projectId: "tarefaplus-b3ce4",
  storageBucket: "tarefaplus-b3ce4.appspot.com",
  messagingSenderId: "119060175582",
  appId: "1:119060175582:web:cdab354702ee061503004f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export {db}