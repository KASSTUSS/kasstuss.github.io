const loginButton = document.getElementById('login_button');

const clickLoginButton = (e) => {
    e.preventDefault();


    $('.transition-elem').css({
        'top': e.clientY + 'px',
        'left': e.clientX + 'px'
    });
    $('.transition-elem').show();
    $('.transition-elem').css({'animation': 'transition-elem 0.75s ease-out'});

    setTimeout(() => {
        $('.transition-bg').show();
        setTimeout(() => {
            $('.loader-container').css({
                'display': 'flex'
            });
            setTimeout(() => {
                $('.loader-container').css({
                    'opacity': '1'
                });
            },50);
        },150);
    },750);
}