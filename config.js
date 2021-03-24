import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCfR-UjVWUvFggCTDlYAU1MXb4W_Qw2S9g",
    authDomain: "joyofgivingapp.firebaseapp.com",
    projectId: "joyofgivingapp",
    storageBucket: "joyofgivingapp.appspot.com",
    messagingSenderId: "971908166428",
    appId: "1:971908166428:web:5e38f4aa6a86c1de0c80d9",
    measurementId: "G-G5HJDZ8FTB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();