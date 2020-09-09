import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCVJfmyHs6XlQnqK0C5-kYPyegY9axW_dY',
  authDomain: 'whatsapp-clone-46e57.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-46e57.firebaseio.com',
  projectId: 'whatsapp-clone-46e57',
  storageBucket: 'whatsapp-clone-46e57.appspot.com',
  messagingSenderId: '461667462023',
  appId: '1:461667462023:web:3aff7724954a6556f9c122',
  measurementId: 'G-8MT498781K',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
