// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwR8kZxPn6H6xnP74oIlQ1QegzACZe9ts",
  authDomain: "warehouse-management-e8596.firebaseapp.com",
  projectId: "warehouse-management-e8596",
  storageBucket: "warehouse-management-e8596.appspot.com",
  messagingSenderId: "758768068330",
  appId: "1:758768068330:web:686e2356e08fcd79195993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;