const passwordInput = document.getElementById('login-password');

document.getElementById('password-visible-switcher').addEventListener('change', function(e){
    if (e.target.checked)
        passwordInput.setAttribute('type', 'text');
    else
        passwordInput.setAttribute('type', 'password');
})