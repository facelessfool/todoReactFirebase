import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBg6HkIqYR0m0VdB8N3lbCgwaO44aZ1sBk",
  authDomain: "react-notes-d24e3.firebaseapp.com",
  projectId: "react-notes-d24e3",
  storageBucket: "react-notes-d24e3.appspot.com",
  messagingSenderId: "602698712683",
  appId: "1:602698712683:web:227e7e3a171b5c61a1532e"
})

let db=firebase.firestore()

export default{
    firebase,db
}
