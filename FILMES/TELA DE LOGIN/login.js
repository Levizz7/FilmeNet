document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const emailRequired = document.getElementById('emailRequired');
    const senhaRequired = document.getElementById('senhaRequired');
    const btnLogin = document.getElementById('btn-login');

    btnLogin.addEventListener('click', (event) => {
        let valid = true;

        if (!email.value) {
            emailRequired.style.display = 'block';
            email.classList.add('input-error');
            valid = false;
        } else {
            emailRequired.style.display = 'none';
            email.classList.remove('input-error');
        }

        if (!senha.value) {
            senhaRequired.style.display = 'block';
            senha.classList.add('input-error');
            valid = false;
        } else {
            senhaRequired.style.display = 'none';
            senha.classList.remove('input-error');
        }

        if (!valid) {
            event.preventDefault(); 
        }
    });
});