
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD-puz0LzSslJwsunm24hKvWGldn5BPK8g",
  authDomain: "game-of-trhones-api.firebaseapp.com",
  projectId: "game-of-trhones-api",
  storageBucket: "game-of-trhones-api.firebasestorage.app",
  messagingSenderId: "497339397314",
  appId: "1:497339397314:web:45dcacb1d293998b73b75b",
  measurementId: "G-5H9E1RVE5K"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);