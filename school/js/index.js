window.addEventListener('load', () => {
    const cards = document.getElementsByClassName('content_card');

    const showCard = (cards, step=0) =>  {
        cards[step].classList = 'content_card card_show';
        
        if(step+1 < cards.length)
            setTimeout(() => {showCard(cards, step+1)},100);
    };
    
    showCard(cards);
});


const logout = (event) => {
    event.preventDefault();

    window.location.href = 'login.html';
};