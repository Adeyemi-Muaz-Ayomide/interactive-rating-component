let submitBtnClick = document.getElementById('submitBtn');
let rateBtnClick = document.getElementById('rate-again');
let mainContainer = document.getElementById('main-container');
let thankYouMsg = document.getElementById('thankYou-message');
let span = document.querySelector('.span');
let count = 0;
let btnLists = document.querySelectorAll('.btns')

const clickMe = () => {
   mainContainer.classList.toggle('hidden');
   thankYouMsg.classList.toggle('show')
};

submitBtnClick.addEventListener('click', clickMe)
rateBtnClick.addEventListener('click', clickMe)

btnLists.forEach(btn => {
   btn.addEventListener('click' , () => {
      const value = this;
      if (value.classList.Contains('selected')){
         value.classList.toggle('selected')
         count--;
      } else {
         value.classList.toggle('selected')
         count++
      }
      span.textContent = count
   })
})

const fkck = 'cjkc';
console.log(fkck)



// let btnClick = document.getElementById('btn');
// let displayMsg = document.querySelector('.display-message')
// let mainContainer = document.querySelector('.first-section')
// let countLists = document.querySelectorAll('.li')
// let count = 0;
// let span = document.querySelector('.span')



// function dissappearOnClick() {
//    mainContainer.classList.toggle('hidden')
//    displayMsg.classList.toggle('hidden')
// }
// btnClick.addEventListener('click' , dissappearOnClick)

// countLists.forEach(element => {
//    element.addEventListener('click' , function toggleSelector() {
//          const value = this;
//          if (value.classList.contains('selected')){
//             value.classList.toggle('selected');
//             count--
//          } else {
//             value.classList.toggle('selected')
//             count++;
//          }
//          span.textContent = count
//    });
// })

