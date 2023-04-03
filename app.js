const submitBtnClick = document.getElementById('submitBtn');
const rateBtnClick = document.getElementById('rate-again');
const mainContainer = document.getElementById('main-container');
const thankYouMsg = document.getElementById('thankYou-message');
const span = document.querySelector('.span');
const btnList = Array.from(document.querySelectorAll('.btns'));

const toggleElements = (element1, element2) => {
  element1.classList.toggle('hidden');
  element2.classList.toggle('show');
};

let count = 0;
let prevCount = 0;

submitBtnClick.addEventListener('click', () => {
  toggleElements(mainContainer, thankYouMsg);
});

rateBtnClick.addEventListener('click', () => {
  toggleElements(mainContainer, thankYouMsg);
  span.textContent = prevCount = count = 0;
  return count = 0;
});

btnList.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('selected');
    count = document.querySelectorAll('.btns.selected').length;
    span.textContent = prevCount + count;
  });
});

