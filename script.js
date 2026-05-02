const mybtn = document.getElementById("mybtn");
const mylabel1 = document.getElementById("mylabel1");
const max = 100;
const min = 1;
let randomnum;

mybtn.onclick = function(){
   randomnum = Math.floor(Math.random() * (max - min)) + min;
   mylabel1.textContent = randomnum
}