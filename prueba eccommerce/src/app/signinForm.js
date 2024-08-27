import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from './firebase.js'; 
import { showMessage } from './showMessage.js';

const signinForm = document.querySelector('#SigninForm'); // Nota el uso de # y la coincidencia exacta del ID
if (signinForm) {
    signinForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Valores del formulario
        const email = signinForm['signinEmail'].value;
        const password = signinForm['signinPassword'].value;
       
        try {
            // Usa signInWithEmailAndPassword en lugar de createUserWithEmailAndPassword
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuario ingresado:', userCredentials);
           
            // Muestra un mensaje de éxito
            showMessage(`Welcome back ${userCredentials.user.email}`);          
            // Cierra el modal de inicio de sesión signin
            const signinModal = document.querySelector('#signinModal');
            const modal = bootstrap.Modal.getInstance(signinModal);
            modal.hide();
                
        } catch (error) {
            // Manejo de errores específico
            let errorMessage = 'Ocurrió un error al intentar iniciar sesión. Por favor, intenta nuevamente.';
            let errorType = 'error'; // Tipo de mensaje por defecto

            switch (error.code) {
                case 'auth/user-not-found':
                    errorMessage = 'No se encontró un usuario con ese correo electrónico.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'La contraseña ingresada es incorrecta.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'El correo electrónico ingresado no es válido.';
                    break;
                default:
                    errorMessage = `Error: ${error.message}`;
            }
            
            // Muestra el mensaje de error reutilizando showMessage
            showMessage(errorMessage, errorType);
            console.error('Error al iniciar sesión:', error.code, error.message);
        }
    });
} else {
    console.error('El formulario de inicio de sesión no se encontró.');
}

