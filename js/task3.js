const button3 = document.getElementById('task-3-button');
const input3 = document.getElementById('task-3-input');


button3.addEventListener('click', () => {
    if(input3.type === 'password') {
        input3.type = 'text';
        button3.textContent = 'Приховати';
    } else {
        input3.type = 'password';
        button3.textContent = 'Розкрити';
    }
});