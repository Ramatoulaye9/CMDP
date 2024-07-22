function validate_password() {
    let pass = document.getElementById('mdp').value;
    let confirm_pass = document.getElementById('cmdp').value;
    let verificationSpan = document.getElementById('verification');
    let submitButton = document.getElementById('submit');

    if (pass !== confirm_pass) {
        verificationSpan.style.color = 'red';
        verificationSpan.innerHTML = '☒ Utilisez le même mot de passe';
        submitButton.disabled = true;
        submitButton.style.opacity = 0.4;
    } else {
        verificationSpan.style.color = 'green';
        verificationSpan.innerHTML = '🗹 Mot de passe confirmé';
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
    }
}