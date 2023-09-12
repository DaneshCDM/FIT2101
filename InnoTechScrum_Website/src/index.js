// Import the functions you need from the SDKs you need
import { initializeApp } from "https://innotechscrum-default-rtdb.asia-southeast1.firebasedatabase.app.js";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "https://innotechscrum-default-rtdb.asia-southeast1.firebasedatabase.app.js";
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
const database = getDatabase(app);

// Assuming you have a function to fetch data from the database
function fetchDataFromDatabase(searchQuery) {
  // Replace this with actual code to fetch data from the database
  // and display it in the #result-container
  const data = `Data for search query: ${searchQuery}`;
  document.getElementById('result-container').textContent = data;
}
function openPopUp(){
  const popup = document.getElementById("popup");
  const popupContentText = "This is the popup content";
  const popupContent = document.createElement("div");
  popupContent.textContent = popupContentText;
  popup.appendChild(popupContent);
  popup.style.display="block";
}
function closePopUp(){
  const popup = document.getElementById("popup");
  popup.style.display="none";
  popup.innerHTML ="";
}
document.getElementById('search-bar').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
      const searchQuery = event.target.value;
      fetchDataFromDatabase(searchQuery);
  }
});