import * as firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyCa20g57HoRHhnM-N_mCPbo3zS7oe2zLZk",
    authDomain: "freebees-beta.firebaseapp.com",
    databaseURL: "https://freebees-beta.firebaseio.com",
    projectId: "freebees-beta",
    storageBucket: "freebees-beta.appspot.com",
    messagingSenderId: "363849771617"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;