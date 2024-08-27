import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { auth,db } from './app/firebase.js'
import {loginCheck} from './app/logingCheck.js'
import { setupPosts } from './app/postsList.js';
import './app/signupForm.js';
import './app/signinForm.js';
import './app/logout.js';
import './app/loginGoogle.js';
import './app/loginFacebook.js';
import './app/loginGithub.js';

// Manejo del estado de autenticación

onAuthStateChanged(auth, async (user) => {
    if (user) {
      loginCheck(user);
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        setupPosts(querySnapshot.docs);
      } catch (error) {
        console.log(error)
      }
    } else {
      setupPosts([]);
      loginCheck(user);
    }
  }); 

