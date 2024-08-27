const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const loggedUpLinks = document.querySelectorAll('.logged-up')

export const loginCheck = (user) => {
    if (user) {
        loggedOutLinks.forEach(link => link.style.display = 'none');
        loggedInLinks.forEach(link => link.style.display = 'block');
        loggedUpLinks.forEach(link => link.style.display = 'none');
    } else {
        loggedOutLinks.forEach(link => link.style.display = 'block');
        loggedInLinks.forEach(link => link.style.display = 'none');
        loggedUpLinks.forEach(link => link.style.display = 'block');
    }
};
 





























