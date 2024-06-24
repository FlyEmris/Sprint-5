const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');

// Assume isLoggedIn is a variable that tracks the login state
let isLoggedIn = false;

function toggleLoginState() {
    isLoggedIn = !isLoggedIn;
    if (isLoggedIn) {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'inline-block'; // Show logout button
    } else {
        loginButton.style.display = 'inline-block'; // Show login button
        logoutButton.style.display = 'none';
    }
}

loginButton.addEventListener('click', toggleLoginState);
logoutButton.addEventListener('click', toggleLoginState);
