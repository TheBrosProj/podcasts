import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAb4SuGiu9_77e8CyGaNzu5ukJRz3HXaC0",
  authDomain: "podcasts-bots-team.firebaseapp.com",
  databaseURL: "https://podcasts-bots-team-default-rtdb.firebaseio.com",
  projectId: "podcasts-bots-team",
  storageBucket: "podcasts-bots-team.appspot.com",
  messagingSenderId: "1059474954329",
  appId: "1:1059474954329:web:d91a38aba6b6824c383948"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
