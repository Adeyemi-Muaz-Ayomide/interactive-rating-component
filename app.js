let btnClick = document.getElementById('btn');
let displayMsg = document.querySelector('.display-message')
let firstSection = document.querySelector('.first-section')
let countLists = document.querySelectorAll('.li')
let count = 0;
let span = document.querySelector('.span')

btnClick.addEventListener('click' , function() {
   firstSection.classList.toggle('hidden')
   displayMsg.classList.toggle('hidden')
})

countLists.forEach(element => {
   element.addEventListener('click' , function toggleSelector() {
         const value = this;
         if (value.classList.contains('selected')){
            value.classList.toggle('selected');
            count--
         } else {
            value.classList.toggle('selected')
            count++;
         }
         span.textContent = count
   });
})

