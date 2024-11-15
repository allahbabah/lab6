const loginForm = document.querySelector('.login-form');
const loginButton = document.getElementById('login-button');


loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData)

    for (const key in data) {
        if (data[key].trim() === '') {
            alert('All form fields must be filled in');
            return;
        }
    }
    console.log(data);
    loginForm.reset();
});