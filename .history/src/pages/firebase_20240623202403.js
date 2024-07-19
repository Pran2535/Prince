// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcuM2fvK33jEEUtGQy-e_WEwhcwiYPjq4",
  authDomain: "crypto-tracing.firebaseapp.com",
  projectId: "crypto-tracing",
  storageBucket: "crypto-tracing.appspot.com",
  messagingSenderId: "102771429534",
  appId: "1:102771429534:web:0a1bedab2ab97ae9eeab8f",
  measurementId: "G-RF154XT7FV",
};
const auth = getAuth(app);
export { auth };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app();
