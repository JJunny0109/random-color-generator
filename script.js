const body = document.body;
const theBtn = document.querySelector('#theBtn');
//HTML Elements 가져오기

body.style.backgroundColor = '';
let randomNum = 0;

theBtn.addEventListener('click', () => {
  body.style.backgroundColor = '#' + randomDexNumGenerate(0, 16777216);
});

const randomDexNumGenerate = function(minNum, maxNum){
  randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  return randomNum.toString(16);
  
}