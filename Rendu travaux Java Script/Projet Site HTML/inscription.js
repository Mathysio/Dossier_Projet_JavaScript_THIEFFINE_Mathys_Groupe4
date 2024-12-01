let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Envoi du form détecté!');

    let email = document.querySelector('#email');
    if(email.value===''){
        email.classList.add('error');
        email.classList.remove('success');
        console.log("Email non conforme");
    } else {
        email.classList.add('success');
        email.classList.remove('error');
        console.log("Email valide");
    }

    let pseudo = document.querySelector('#pseudo');
    if (pseudo.value.length > 6) {
        pseudo.classList.remove('error');
        pseudo.classList.add('success');
        console.log("Pseudo valide");
    } else {
        pseudo.classList.add('error');
        pseudo.classList.remove('success');
        console.log("Pseudo invalide");
    }

    let passCheck = new RegExp(
        "^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{10,}$"
    );

    let password = document.querySelector('#password');
    if (password.value.length > 10 && passCheck.test(password.value)==false) {
        password.classList.remove('error');
        password.classList.add('success');
        console.log("Mot de passe valide");
    } else {
        password.classList.add('error');
        password.classList.remove('success');
        console.log("Mot de passe invalide");
    }

    let passwordConfirm = document.querySelector('#passwordConfirm')
    if (password.value === passwordConfirm.value && password.value !== '') {
        passwordConfirm.classList.remove('error');
        passwordConfirm.classList.add('success');
        console.log("Confirmation du mot de passe valide");
    } else {
        passwordConfirm.classList.add('error');
        passwordConfirm.classList.remove('success');
        console.log("Confirmation du mot de passe invalide");
    }

});