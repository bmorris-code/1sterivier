 var firebaseConfig = {
    apiKey: "AIzaSyD-xhjNm6FS84xdBvKWGGR-n5jkkPhABPo",
    authDomain: "steriver-644b9.firebaseapp.com",
    projectId: "steriver-644b9",
    storageBucket: "steriver-644b9.appspot.com",
    messagingSenderId: "824901250548",
    appId: "1:824901250548:web:f5451903c66a2af7585da1",
    measurementId: "G-DMXX24PB8F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  firebase.initializeApp(config);
// Get a reference to the database service
  var database = firebase.database();