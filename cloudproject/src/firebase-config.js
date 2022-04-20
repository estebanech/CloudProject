import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCQU8mhPL-MWxv98dV-W6Xa00JqNbdQoYc",
    authDomain: "cloud-project-e8784.firebaseapp.com",
    projectId: "cloud-project-e8784",
    storageBucket: "cloud-project-e8784.appspot.com",
    messagingSenderId: "603400421822",
    appId: "1:603400421822:web:987705672c3289eaefb9ef"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)