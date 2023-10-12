// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNcur4zR68d_VXe-TQ98tAr-JauOjWy0s",
  authDomain: "playpix-by-pragun.firebaseapp.com",
  projectId: "playpix-by-pragun",
  storageBucket: "playpix-by-pragun.appspot.com",
  messagingSenderId: "652570157494",
  appId: "1:652570157494:web:f2ecf73ff142a1a9856117",
  measurementId: "G-J3WJ8DZMYV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
