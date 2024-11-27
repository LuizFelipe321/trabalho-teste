
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const validUsername = 'usuario';
    const validPassword = 'senha123';

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        
        window.location.href = 'welcome.html'; 
    } else {
        
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-message').textContent = 'Usuário já existe. Tente outro nome.';
        return;
    }

    localStorage.setItem(newUsername, newPassword);

    window.location.href = 'login.html';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-message').textContent = 'Usuário já existe. Tente outro nome.';
        return;
    }

    localStorage.setItem(newUsername, newPassword);

    
    window.location.href = 'login.html';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        
        window.location.href = 'index.html';
    } else {
        
        document.getElementById('login-message').textContent = 'Usuário ou senha incorretos.';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        
        window.location.href = 'index.html'; 
    } else {
        
        alert('As senhas não coincidem. Por favor, tente novamente.');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const validUsername = 'usuario';
    const validPassword = 'senha123';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        
        window.location.href = 'discovery.html'; 
    } else {
        
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});