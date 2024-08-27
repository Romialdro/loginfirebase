import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js'; 

const facebookButton = document.querySelector('#FacebookLogin');

if (facebookButton) {
    facebookButton.addEventListener('click', async () => {
        const provider = new FacebookAuthProvider();
        provider.addScope('email'); // Solicita el permiso de email

        try {
            // Inicia sesión con el proveedor de Facebook
            const userCredentials = await signInWithPopup(auth, provider);
            console.log('Usuario ingresado:', userCredentials);

            // Muestra un mensaje de éxito
            showMessage(`Welcome ${userCredentials.user.email}`);

            // Cierra el modal de registro si está abierto
            const signupModal = document.querySelector('#signupModal');
            if (signupModal) {
                const modal = bootstrap.Modal.getInstance(signupModal);
                modal.hide();
            }

        } catch (error) {
            // Manejo de errores específico
            let errorMessage = 'Ocurrió un error al intentar iniciar sesión con Facebook. Por favor, intenta nuevamente.';
            let errorType = 'error'; // Tipo de mensaje por defecto

            switch (error.code) {
                case 'auth/account-exists-with-different-credential':
                    errorMessage = 'Ya existe una cuenta con este correo electrónico pero con credenciales diferentes.';
                    break;
                case 'auth/cancelled-popup-request':
                    errorMessage = 'La solicitud de inicio de sesión fue cancelada.';
                    break;
                case 'auth/popup-closed-by-user':
                    errorMessage = 'El popup de inicio de sesión fue cerrado antes de completar el proceso.';
                    break;
                default:
                    errorMessage = `Error: ${error.message}`;
            }

            // Muestra el mensaje de error reutilizando showMessage
            showMessage(errorMessage, errorType);
            console.error('Error al iniciar sesión con Facebook:', error.code, error.message);
        }
    });
} else {
    
    console.error('El botón de Facebook Login no se encontró.');
}
