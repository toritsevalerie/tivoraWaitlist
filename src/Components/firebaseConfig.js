// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDP3UXgylS2amjMA1k5dtqoHozvDoefA-Q",
  authDomain: "tivorawaitlist.firebaseapp.com",
  databaseURL: "https://tivorawaitlist-default-rtdb.firebaseio.com/",
  projectId: "tivorawaitlist",
  storageBucket: "tivorawaitlist.appspot.com",
  messagingSenderId: "116903714217",
  appId: "1:116903714217:web:afcea81c86b19d32d6b8b8",
  measurementId: "G-5TEEGZWTHM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
