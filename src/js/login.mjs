const Login = () => {
    $('.transition-bg').show();
    $('.transition-bg').css({
        'z-index': '999'
    });
    setTimeout(() => {
        document.getElementsByClassName('transition-bg')[0].className = 'transition-bg transition-bg-show';
        $('.loader-container').css({
            'display': 'flex'
        });
    }, 1);   
    
    setTimeout(() => {
        $('.loader-container').css({
            'opacity': '1'
        });
        $('html').css({
            'overflow': 'hidden'
        });
        $('.main-container').css({
            'display': 'none'
        });
    },350);
}

export default Login;