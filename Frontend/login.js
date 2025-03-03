const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    await login(username, password);
});

async function login(username, password) {
    const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();
        const token = data.token;
        // Store the token in local storage or a cookie
        localStorage.setItem('jwtToken', token);
        console.log('Login successful');
        window.location.href = './home.html';
    } else {
        console.error('Login failed');
    }
}