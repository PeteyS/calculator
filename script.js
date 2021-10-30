let firstNumber = 0;

const button = document.getElementById('zero');
const bottom = document.getElementById('bot');

button.addEventListener('click',()=>{
    bottom.textContent = firstNumber
})