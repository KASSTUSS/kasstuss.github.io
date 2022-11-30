const passwordInputs = document.querySelectorAll('input[data-password]');

let togglePass = function(switcher) {
    for (let i=0; i<passwordInputs.length; i++) {
        if (switcher.checked)
                passwordInputs[i].setAttribute('type', 'text');
            else
                passwordInputs[i].setAttribute('type', 'password');
            
            passwordInputs[i].focus();
    }
}