import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from './firebase.js'; 
import { showMessage } from './showMessage.js';
import { setupPosts } from "./postsList.js";

// Formulario de registro
const signupForm = document.querySelector('#signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Valores del formulario
        const email = signupForm['signupEmail'].value;
        const password = signupForm['signupPassword'].value;

        try {
            // Usa la instancia de auth importada desde firebase.js
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log('Usuario creado:', userCredentials);
           
            // Muestra un mensaje de éxito
            showMessage(`Welcome ${userCredentials.user.email}`); 
            
            // Cierra el modal de registro signUp
            const signupModal = document.querySelector('#signupModal');
            const modal = bootstrap.Modal.getInstance(signupModal);
            modal.hide();
           
                
        } catch (error) {
            // Manejo de errores específico
            let errorMessage = 'Ocurrió un error al intentar registrar el usuario. Por favor, intenta nuevamente.';
            let errorType = 'error'; // Tipo de mensaje por defecto

            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'El correo electrónico ya está en uso. Por favor, intenta con otro correo.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'El correo electrónico ingresado no es válido.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
                    break;
                default:
                    errorMessage = `Error: ${error.message}`;
            }
            
            // Muestra el mensaje de error reutilizando showMessage
            showMessage(errorMessage, errorType);
            console.error('Error al crear el usuario:', error.code, error.message);
        }
    });
} else {
    console.error('El formulario de registro no se encontró.');
} 