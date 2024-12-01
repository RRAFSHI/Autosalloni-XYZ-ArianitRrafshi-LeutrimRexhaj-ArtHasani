
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === '' || password === '') {
        alert('Ju lutem plotësoni të gjitha fushat për hyrje!');
    } else {
        alert(`Hyrja u krye me sukses! Mirë se vini, ${email}`);
    }
});


document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (email === '' || password === '') {
        alert('Ju lutem plotësoni të gjitha fushat për regjistrim!');
    } else {
        alert(`Regjistrimi u krye me sukses! Mirë se vini, ${email}`);
    }
});

showRegisterForm.addEventListener('click', (event) => {
    event.preventDefault();
    loginContainer.classList.add('hidden');
    registerContainer.classList.remove('hidden');
});