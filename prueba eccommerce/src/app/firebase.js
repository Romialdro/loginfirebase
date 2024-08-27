// app/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAPG8v_koZH-k9Ca630qvkuUgE-7ozs0KU",
  authDomain: "loginfirebase-eb167.firebaseapp.com",
  projectId: "loginfirebase-eb167",
  storageBucket: "loginfirebase-eb167.appspot.com",
  messagingSenderId: "492717206382",
  appId: "1:492717206382:web:7efa54d82c595c8e11ef7f",
  measurementId: "G-Z2DHT2VEGS"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };

