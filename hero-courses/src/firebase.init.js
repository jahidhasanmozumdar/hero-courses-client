// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4a73d5Q8Y1utAERDRfmrufStws1yF8nU",
  authDomain: "hero-courses.firebaseapp.com",
  projectId: "hero-courses",
  storageBucket: "hero-courses.appspot.com",
  messagingSenderId: "855308257622",
  appId: "1:855308257622:web:5846e083475d2d05b22ef7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
