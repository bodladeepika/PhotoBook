import * as firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA7r0atBN4fOb87EOPx0HiQnQrjxfQvehQ",
    authDomain: "photowall-57b8b.firebaseapp.com",
    databaseURL: "https://photowall-57b8b.firebaseio.com",
    projectId: "photowall-57b8b",
    storageBucket: "photowall-57b8b.appspot.com",
    messagingSenderId: "156213694062"
  };

  firebase.initializeApp(config);

  const database = firebase.database()

  export {database}