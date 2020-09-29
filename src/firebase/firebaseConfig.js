import firebase from 'firebase';
import firestore from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGnLM321uEatIqWPnsUgR1L_1b1LiLM8k',
  authDomain: 'studa-reg.firebaseapp.com',
  databaseURL: 'https://studa-reg.firebaseio.com',
  projectId: 'studa-reg',
  storageBucket: 'studa-reg.appspot.com',
  messagingSenderId: '219478198672',
  appId: '1:219478198672:web:8bc40c157f9f287477cb15',
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
