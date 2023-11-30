// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKcmm24-Xg5ADYyHIxukDGlxGAM8ubK1Y",
  authDomain: "todo-about-chat-app.firebaseapp.com",
  projectId: "todo-about-chat-app",
  storageBucket: "todo-about-chat-app.appspot.com",
  messagingSenderId: "832238798475",
  appId: "1:832238798475:web:e6d4daf53a777151a7768e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig