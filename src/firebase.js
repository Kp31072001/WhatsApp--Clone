// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeeTVsHAypVkYgcQyTpjbT2AuqttibofQ",
  authDomain: "whatsapp-clone-kp-8964f.firebaseapp.com",
  projectId: "whatsapp-clone-kp-8964f",
  storageBucket: "whatsapp-clone-kp-8964f.appspot.com",
  messagingSenderId: "633912931298",
  appId: "1:633912931298:web:4230f64a6454695763bfbb",
  measurementId: "G-SDV3C68P54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider};
export default db;