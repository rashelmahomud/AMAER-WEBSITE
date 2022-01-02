const myArry = [0,1,2,3,4,5,6,7,8,9];


const btn = document.querySelector('.btn');
const color = document.querySelector('.color');



btn.addEventListener('click', function(){

     let hexColor = '#';
     for(let i = 0; i < 6; i++){

        hexColor += myArry[getRandomNumber()];

     };

     color.textContent = hexColor;
     document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random() * myArry.length);
}