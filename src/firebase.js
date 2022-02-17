import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt-sJz6bwNSE86g67TpLjkCQLZrNgbW30",
  authDomain: "anas-yt-clone-b6412.firebaseapp.com",
  projectId: "anas-yt-clone-b6412",
  storageBucket: "anas-yt-clone-b6412.appspot.com",
  messagingSenderId: "932813412977",
  appId: "1:932813412977:web:91d6749ee26cb1bfd2d9d0",
  measurementId: "G-1NVY2GX0ZL",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
