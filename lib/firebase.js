import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEh1TRa7xqqUhVJ8fO3WTpXx6VRE8nFgQ",
  authDomain: "podcast-ff456.firebaseapp.com",
  projectId: "podcast-ff456",
  storageBucket: "podcast-ff456.appspot.com",
  messagingSenderId: "201531196151",
  appId: "1:201531196151:web:eb727e51dbee06f59cc9f2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var storage = firebase.storage();

export {firebase,storage};
