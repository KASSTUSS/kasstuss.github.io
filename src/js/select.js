const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_content = selectSingle.querySelector('.__select__content');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
const selectSingle_icon = selectSingle.querySelectorAll('.__select__label__icon');

const closeSelect = function() {
  selectSingle.setAttribute('data-state', '');
    setTimeout(function(){
      selectSingle_content.style.display = "none";
    },0);
};

const openSelect = function() {
  selectSingle_content.style.display = "flex";
    setTimeout(function(){
      selectSingle.setAttribute('data-state', 'active');
    },0);
};

selectSingle_title.addEventListener('click', (e) => {
  e.stopPropagation();
  if ('active' === selectSingle.getAttribute('data-state')) {
    closeSelect();
  } else {
    openSelect();
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    evt.stopPropagation();
    selectSingle_title.textContent = evt.target.textContent;
    document.querySelector(".login-reg-input-icon-select").innerHTML = selectSingle_icon[i-1].innerHTML;

    closeSelect();
  });
}

window.addEventListener("click", function(e){
  if('active' === selectSingle.getAttribute('data-state'))
    closeSelect();
});