const submitBtnClick = document.getElementById('submitBtn');
const rateBtnClick = document.getElementById('rate-again');
const mainContainer = document.getElementById('main-container');
const thankYouMsg = document.getElementById('thankYou-message');
const span = document.querySelector('.span');
const btnList = document.querySelectorAll('.btns');
let count = 0;

const toggleElements = (element1, element2) => {
  element1.classList.toggle('hidden');
  element2.classList.toggle('show');
};

submitBtnClick.addEventListener('click', () => {
  toggleElements(mainContainer, thankYouMsg);
});

rateBtnClick.addEventListener('click', () => {
  toggleElements(mainContainer, thankYouMsg);
  const val = span.textContent
  return val = 0

});

btnList.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    span.textContent = value;
  });
});
