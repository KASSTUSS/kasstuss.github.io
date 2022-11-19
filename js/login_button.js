const loginButton = document.getElementById('login_button');

const clickLoginButton = (e) => {
    e.preventDefault();

    
    $('html').css({
        'overflow': 'hidden'
    });
    $('.transition-elem').css({
        'top': e.clientY + 'px',
        'left': e.clientX + 'px'
    });
    $('.transition-elem').show();
    $('.transition-elem').css({
        'animation': 'transition-elem 0.75s ease-out',
        'z-index': '999'
    });

    setTimeout(() => {
        $('.transition-bg').show();
        setTimeout(() => {
            $('.loader-container').css({
                'display': 'flex',
                'z-index': '999'
            });
            setTimeout(() => {
                $('.loader-container').css({
                    'opacity': '1'
                });
                $('html').css({
                    'overflow': 'hidden'
                });
            },25);
        },25);
    },750);
}