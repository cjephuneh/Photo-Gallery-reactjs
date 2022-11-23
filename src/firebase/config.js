import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRG_XLatPcxZsKqp7rBJJfnLQL2WNVS8M",
    authDomain: "photo-gallery-46f60.firebaseapp.com",
    projectId: "photo-gallery-46f60",
    storageBucket: "photo-gallery-46f60.appspot.com",
    messagingSenderId: "683758053579",
    appId: "1:683758053579:web:cb8f17a675d08a68a9534e",
    measurementId: "G-JM37EP362D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage, projectFirestore};