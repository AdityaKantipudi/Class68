import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBuvOwH0L7DMb7zfFGmkqgOZDCFMnOJj68",
  authDomain: "wireless-buzzer-b7466.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-b7466.firebaseio.com",
  projectId: "wireless-buzzer-b7466",
  storageBucket: "wireless-buzzer-b7466.appspot.com",
  messagingSenderId: "548421415629",
  appId: "1:548421415629:web:9e3d1af6fe8f960d77ef84",
  measurementId: "G-RZLNWS7NLD"
};


firebase. initializeApp(firebaseConfig);
export default firebase.database();