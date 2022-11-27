const Login = () => {

    document.getElementsByClassName('transition-bg')[0].style.display = 'block';
    document.getElementsByClassName('transition-bg')[0].style.zIndex = '999';

    setTimeout(() => {
        document.getElementsByClassName('transition-bg')[0].className = 'transition-bg transition-bg-show';
        document.getElementsByClassName('loader-container')[0].style.display = 'flex';
    }, 0);   
    
    setTimeout(() => {
        document.getElementsByClassName('loader-container')[0].style.opacity = '1';
        document.getElementsByClassName('main-container')[0].style.display = 'none';
        document.body.style.overflow = 'hidden';
    },350);
    document.body.style.overflow = 'auto';
}

export default Login;