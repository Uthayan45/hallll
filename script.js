// JavaScript for login form validation and theme toggle

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const emailInput = document.querySelector('.input-mail');
    const passwordInput = document.querySelector('.input-pwd');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If validation is successful, redirect to another page (e.g., dashboard.html)
    window.location.href = 'dashboard.html';
});

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password validation (min 6 characters)
function validatePassword(password) {
    return password.length >= 6;
}

// Theme toggle
const themeToggleButton = document.getElementById('toggle');
const body = document.body;

themeToggleButton.addEventListener('change', function() {
    if (themeToggleButton.checked) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});
