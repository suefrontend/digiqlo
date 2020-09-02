import * as firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDLleERNAa5sQ9g6EfXbDwbL6JjDy8ofsk",
  authDomain: "digiqlo-554a3.firebaseapp.com",
  databaseURL: "https://digiqlo-554a3.firebaseio.com",
  projectId: "digiqlo-554a3",
  storageBucket: "digiqlo-554a3.appspot.com",
  messagingSenderId: "548338529062",
  appId: "1:548338529062:web:5789ec7465ed956989c7e7",
  measurementId: "G-N6SWZY1RL5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()

export {
  storage, firebase as default
}

