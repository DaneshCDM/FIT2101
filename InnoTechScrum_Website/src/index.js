// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCghK_Zy_3Enmz0RJ9pvAxZfWxUYQp-InQ",
  authDomain: "innotechscrum.firebaseapp.com",
  projectId: "innotechscrum",
  storageBucket: "innotechscrum.appspot.com",
  messagingSenderId: "365889461120",
  appId: "1:365889461120:web:42e3ff55449d78b148bf65",
  measurementId: "G-435J39SW2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Assuming you have a function to fetch data from the database
function fetchDataFromDatabase(searchQuery) {
  // Replace this with actual code to fetch data from the database
  // and display it in the #result-container
  const data = `Data for search query: ${searchQuery}`;
  document.getElementById('result-container').textContent = data;
}

document.getElementById('search-bar').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      const searchQuery = event.target.value;
      fetchDataFromDatabase(searchQuery);
  }
});