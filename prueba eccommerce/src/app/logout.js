import { signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
    const logout = document.querySelector('#logout');

    if (logout) {
        logout.addEventListener('click', async () => {
            try {
                await signOut(auth);
                console.log('User signed out');
                // Aquí redirigir al usuario o mostrar un mensaje de éxito
            } catch (error) {
                console.error('Error signing out:', error);
                // Aquí mensaje de error al usuario
            }
        });
    } else {
        console.error('Logout button not found');
    }
});
